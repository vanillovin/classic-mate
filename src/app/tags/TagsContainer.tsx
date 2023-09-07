"use client";

import React, { useState } from "react";

import TagList from "./TagList";
import ClassicList from "./ClassicList";
import ClassicSearchForm from "@/components/classics/ClassicSearchForm";

type TagContainerProps = {
	classics: Classic[];
	selectedTags: string[];
};

function TagsContainer({ classics, selectedTags }: TagContainerProps) {
	const [tagInput, setTagInput] = useState("");
	const tags = [...new Set(classics?.map((classic) => classic.tags).flat())];
	const filteredClassics =
		selectedTags[0] === ""
			? classics
			: classics.filter((classic) =>
					[...selectedTags, tagInput].some((tag) => classic.tags.includes(tag)),
			  );

	return (
		<>
			<ClassicSearchForm
				value={tagInput}
				onChange={(e) => setTagInput(e.target.value)}
				onClick={() => setTagInput("")}
				placeholder="클래식 태그 검색하기"
			/>
			<TagList tags={tags} selectedTags={[...selectedTags, tagInput]} />
			<ClassicList
				classics={filteredClassics}
				selectedTags={[...selectedTags, tagInput]}
			/>
		</>
	);
}

export default TagsContainer;
