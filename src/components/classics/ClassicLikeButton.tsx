"use client";

import { toast } from "react-toastify";
import React, { useState } from "react";

import supabase from "@/lib/supabase/client";
import { useSupabase } from "../providers/supabase-provider";
import { useQuery, useQueryClient } from "@tanstack/react-query";

type Props = {
	classicId: number;
	className?: string;
	serverLikeCount: number;
	isShowLikeCount?: boolean;
};

async function fetchClssicLikes(userId: string): Promise<ClassicLike[]> {
	const { data } = await supabase
		.from("classic_likes")
		.select("*")
		.eq("user_id", userId);
	return data ?? [];
}

function ClassicLikeButton({
	classicId,
	className,
	serverLikeCount,
	isShowLikeCount = false,
}: Props) {
	const queryClient = useQueryClient();
	const { supabase, session } = useSupabase();
	const { data: likes } = useQuery({
		queryKey: ["classicLikes", session?.user.id],
		queryFn: () => {
			if (session) {
				return fetchClssicLikes(session.user.id);
			} else {
				return [];
			}
		},
	});
	const [isHovered, setIsHovered] = useState(false);
	const isLiked = !!likes?.find((like) => like.classic_id === classicId);
	const [likeCount, setLikeCount] = useState(serverLikeCount);
	const handleHover = () => setIsHovered(!isHovered);

	async function increaseLikeCount() {
		const { error } = await supabase
			.from("all_classics")
			.update({ like_count: likeCount + 1 })
			.eq("id", classicId);
		if (!error) setLikeCount(likeCount + 1);
	}

	async function decreaseLikeCount() {
		const { error } = await supabase
			.from("all_classics")
			.update({ like_count: likeCount - 1 })
			.eq("id", classicId);
		if (!error) setLikeCount(likeCount - 1);
	}

	async function handleLikeClassic(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (!session) {
			return toast.error("로그인 후 이용 가능합니다");
		}

		if (!isLiked) {
			const { error } = await supabase.from("classic_likes").insert({
				classic_id: classicId,
				user_id: session.user.id,
			});
			if (!error) {
				increaseLikeCount();
				queryClient.invalidateQueries(["classicLikes", session.user.id]);
			} else {
				toast.error("좋아요 실패");
			}
		} else {
			const { error } = await supabase
				.from("classic_likes")
				.delete()
				.eq("classic_id", classicId);
			if (!error) {
				decreaseLikeCount();
				queryClient.invalidateQueries(["classicLikes", session.user.id]);
			} else {
				toast.error("좋아요 취소 실패");
			}
		}
	}

	return (
		<button
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			onClick={handleLikeClassic}
			className={`flex items-center justify-center ${className}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill={isLiked ? "currentColor" : isHovered ? "currentColor " : "none"}
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-5 h-5 sm:w-6 sm:h-6 hover:text-vintage-holiday-red"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 8.26c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
					className="text-vintage-holiday-red"
				/>
			</svg>
			{isShowLikeCount && (
				<span className="text-sm sm:text-base">{likeCount}</span>
			)}
		</button>
	);
}

export default ClassicLikeButton;
