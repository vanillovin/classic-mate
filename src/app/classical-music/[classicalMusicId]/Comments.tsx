"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { getClassicalMusicComments } from "./api";

type CommentsProps = {
	classicalMusicId: string;
	classicalMusicTitle: string;
	comments: ClassicComment[];
};

function Comments({
	classicalMusicId,
	classicalMusicTitle,
	comments,
}: CommentsProps) {
	const { data } = useQuery({
		queryKey: ["classicalMusicComments", classicalMusicId],
		queryFn: () => getClassicalMusicComments(classicalMusicId),
		initialData: comments,
		suspense: true,
	});

	return (
		<div className="w-full sm:px-12 my-8">
			<CommentForm
				classicalMusicId={classicalMusicId}
				classicalMusicTitle={classicalMusicTitle}
			/>
			<ul className="my-4">
				{data.map((comment) => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</ul>
		</div>
	);
}

export default Comments;
