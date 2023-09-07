"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { getClassicComments } from "./api";

type CommentsProps = {
	classicId: string;
	comments: ClassicComment[];
};

function Comments({ classicId, comments }: CommentsProps) {
	const { data } = useQuery({
		queryKey: ["classicComments", classicId],
		queryFn: () => getClassicComments(classicId),
		initialData: comments,
		suspense: true,
	});

	return (
		<div className="w-full sm:px-12 my-8">
			<CommentForm classicId={classicId} />
			<ul className="my-4">
				{data.map((comment) => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</ul>
		</div>
	);
}

export default Comments;
