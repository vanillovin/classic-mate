"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import React, { useState } from "react";

import { formatTimestamp } from "@/utils/dateUtils";
import { useQueryClient } from "@tanstack/react-query";
import { useSupabase } from "@/components/providers/supabase-provider";

function CommentItem({ comment }: { comment: ClassicComment }) {
	const { session } = useSupabase();
	const { supabase } = useSupabase();
	const queryClient = useQueryClient();
	const [isEditing, setIsEditing] = useState(false);
	const [content, setContent] = useState(comment.content);

	async function handleEditComment() {
		if (comment.content === content) return;
		const { error } = await supabase
			.from("classic_comments")
			.update({ content, updated_at: new Date().toISOString() })
			.eq("id", comment.id);
		if (!error) {
			setIsEditing(false);
			queryClient.invalidateQueries([
				"classicComments",
				String(comment.classic_id),
			]);
		} else {
			toast.error(`댓글 수정 실패 ${error.message}`);
		}
	}

	async function handleDeleteComment() {
		if (!confirm("댓글을 삭제하시겠습니까?")) return;
		const { error } = await supabase
			.from("classic_comments")
			.delete()
			.eq("id", comment.id);
		if (!error) {
			queryClient.invalidateQueries([
				"classicComments",
				String(comment.classic_id),
			]);
		} else {
			toast.error(`댓글 삭제 실패 ${error.message}`);
		}
	}

	return (
		<li
			key={comment.id}
			className="border-b last:border-none border-white bg-white bg-opacity-40 p-2"
		>
			{!isEditing ? (
				<>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link
								href={`/profile/${comment.user_id}`}
								className="font-medium hover:underline"
							>
								{comment.nickname}
							</Link>
							<span className="text-2xs sm:text-xs ml-1 text-pantone-pale-gold">
								{formatTimestamp(comment.created_at)}
							</span>
							{comment.created_at !== comment?.updated_at && (
								<span className="text-2xs sm:text-xs ml-1 text-pantone-pale-gold">
									·<span className="ml-1 text-vintage-holiday-red">수정됨</span>
								</span>
							)}
						</div>
						{session?.user.id === comment.user_id && (
							<div className="flex gap-1">
								<button
									className="text-gray-800 text-sm"
									onClick={() => setIsEditing(true)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1}
										stroke="currentColor"
										className="w-4 h-4"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
										/>
									</svg>
								</button>
								<button
									className="text-gray-800 text-sm"
									onClick={handleDeleteComment}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1}
										stroke="currentColor"
										className="w-4 h-4"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						)}
					</div>
					<p className="py-1">{comment.content}</p>
				</>
			) : (
				<>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="w-full p-1 rounded-sm max-h-32"
					/>
					<div className="text-end">
						<button
							className="text-sm py-1 px-2 rounded-sm opacity-70  hover:opacity-100 transition-all text-white bg-pantone-berkeley-blue"
							onClick={handleEditComment}
						>
							확인
						</button>
						<button
							className="text-sm py-1 px-2 rounded-sm ml-1 opacity-70 hover:opacity-100 transition-all text-white bg-pantone-dark-navy"
							onClick={() => setIsEditing(false)}
						>
							취소
						</button>
					</div>
				</>
			)}
		</li>
	);
}

export default CommentItem;
