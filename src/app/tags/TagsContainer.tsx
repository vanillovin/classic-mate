"use client";

import React from "react";

import TagList from "./TagList";
import ClassicList from "./ClassicList";
import TagsSearchForm from "@/app/tags/TagsSearchForm";

type TagContainerProps = {
	classics: Classic[];
	selectedTags: string[];
};

function TagsContainer({ classics, selectedTags }: TagContainerProps) {
	const allTags = [...new Set(classics?.map((classic) => classic.tags).flat())];
	const filteredClassics =
		selectedTags[0] === ""
			? classics
			: classics.filter((classic) =>
					selectedTags.some((tag) => classic.tags.includes(tag)),
			  );

	return (
		<>
			<TagsSearchForm tags={allTags} />
			<TagList tags={allTags} selectedTags={selectedTags} />
			<ClassicList classics={filteredClassics} selectedTags={selectedTags} />
		</>
	);
}

export default TagsContainer;
