"use client";

import { useEffect, useRef, useState } from "react";

import Message from "./message";
import NewMessage from "./new-message";
import { useSupabase } from "@/components/providers/supabase-provider";

function RealtimeMessages({
	serverMessages,
}: {
	serverMessages: Message[];
}) {
	const { supabase, session } = useSupabase();
	const containerRef = useRef<HTMLUListElement | null>(null);
	const [messages, setMessages] = useState(serverMessages);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const channel = supabase
			.channel("realtime messages")
			.on(
				"postgres_changes",
				{
					event: "*",
					schema: "public",
					table: "messages",
					// filter: `id=eq.${message.id}`,
				},
				(payload) => {
					// router.refresh();
					if (payload.eventType === "INSERT") {
						setMessages([...messages, payload.new as Message]);
					} else if (payload.eventType === "DELETE") {
						setMessages((old) =>
							old.filter((message) => message.id !== payload.old.id),
						);
					}
				},
			)
			.subscribe();

		return () => {
			supabase.removeChannel(channel);
		};
	}, [supabase, messages, setMessages]);

	useEffect(() => {
		const handleNewElementAdded = () => {
			const container = containerRef.current;
			if (container) {
				container.scrollTop = container.scrollHeight - container.clientHeight;
			}
		};
		handleNewElementAdded();
	}, [messages]);

	async function sendMessage(text: string, clearText: () => void) {
		if (!session) {
			return setError("로그인 후 이용 가능합니다.");
		}
		const { error } = await supabase
			.from("messages")
			.insert({ text, user_id: session.user.id });
		if (error) {
			setError("메시지를 올리지 못했습니다");
		} else {
			clearText();
		}
	}

	async function deleteMessage(id: number) {
		const { error } = await supabase.from("messages").delete().eq("id", id);

		if (error) setError("메시지를 삭제하지 못했습니다.");
	}

	useEffect(() => {
		if (error) {
			const timer = setTimeout(() => {
				setError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [error]);

	return (
		<div className="rounded-sm bg-[#826B5E] shadow-md">
			<div className="flex items-center justify-center p-2 shadow-sm">
				<h2 className="text-white text-start self-start">
					<span className=" font-medium text-pantone-babys-breath">
						{messages?.length}
					</span>
					개의 실시간 응원메시지 ˙ ͜ʟ˙
				</h2>
			</div>
			{messages.length > 0 ? (
				<ul
					ref={containerRef}
					className="relative flex flex-col justify-end p-2 mobile:p-4 gap-y-1 mobile:gap-y-2 min-h-[200px] max-h-80 overflow-y-auto scrollbar"
				>
					{error && (
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EDBDAE] p-4 text-sm mobile:text-base rounded-sm shadow-md">
							{error}
						</div>
					)}
					{messages?.map((message: Message) => (
						<Message
							key={message.id}
							message={message}
							deleteMessage={deleteMessage}
						/>
					))}
				</ul>
			) : (
				<div className="text-[#ED8DAE] text-center p-4">
					아직 메시지가 없어요!
				</div>
			)}
			<NewMessage sendMessage={sendMessage} />
		</div>
	);
}

export default RealtimeMessages;
