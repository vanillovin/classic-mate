"use client";

import { toast } from "react-toastify";
import React, { useState } from "react";

import { useSupabase } from "@/components/providers/supabase-provider";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/components/providers/auth-provider";

function CommentForm({
	postId,
	commentCount,
}: { postId: string; commentCount: number }) {
	const queryClient = useQueryClient();
	const [content, setContent] = useState("");
	const { profile } = useAuth();
	const { supabase, session } = useSupabase();

	async function increaseCommentCount(postId: string, commentCount: number) {
		await supabase
			.from("test_posts")
			.update({ comment_count: commentCount + 1 })
			.eq("id", postId);
	}

	async function handleAddComment() {
		if (!session) {
			toast.error("로그인 후 이용 가능합니다.");
			return;
		}
		const { error } = await supabase.from("test_comments").insert({
			content,
			post_id: postId,
			user_id: session.user.id,
			nickname: profile?.nickname ?? "꿀메",
		});
		if (!error) {
			setContent("");
			queryClient.invalidateQueries(["postComments", postId]);
			increaseCommentCount(postId, commentCount);
		} else {
			toast.error("댓글을 올리지 못했습니다.");
		}
	}

	const isDisabled = content.trim().length < 3;

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleAddComment();
			}}
			className="flex items-center border border-pantone-powder focus-within:border-pantone-latte"
		>
			<input
				value={content}
				onChange={(e) => setContent(e.target.value)}
				className="w-full flex-1 px-2 py-1 focus:outline-none placeholder:font-light"
				placeholder="댓글을 입력해 주세요."
				required
			/>
			<button
				type="submit"
				aria-label="댓글 쓰기"
				disabled={isDisabled}
				className={`px-2 h-full text-sm transition-colors ${
					isDisabled
						? "bg-pantone-powder"
						: "bg-pantone-latte hover:bg-pantone-cocoa hover:text-pantone-starwhite"
				}
        `}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-4 h-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
					/>
				</svg>
			</button>
		</form>
	);
}

export default CommentForm;
