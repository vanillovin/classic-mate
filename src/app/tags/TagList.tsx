"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

type TagListProps = {
	tags: string[];
	selectedTags: string[];
};

function TagList({ tags, selectedTags }: TagListProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleTagClick = (tagName: string) => {
		const encodedTagName = encodeURIComponent(tagName);
		const params = new URLSearchParams(searchParams.toString());
		let nextTagIndex = 1; // 다음 추가될 태그 인덱스 번호 (초기 값 1)
		while (params.has(`tag${nextTagIndex}`) && nextTagIndex <= 3) {
			nextTagIndex++; // 설정된 태그 중 빈 자리 찾기
		}

		const existingTagIndex = Array.from(params.keys()).find(
			(key) => key.startsWith("tag") && params.get(key) === encodedTagName,
		); // 클릭된 태그가 이미 선택돼 있는지 확인

		if (existingTagIndex) {
			params.delete(existingTagIndex);
		} else if (nextTagIndex <= 3) {
			params.set(`tag${nextTagIndex}`, encodedTagName);
		}

		const newSearchParams = params.toString();
		router.push(`tags?${newSearchParams}`);
	};

	return (
		<details open className="p-1">
			<summary className="font-semibold cursor-pointer">모든 태그</summary>
			<div className="flex flex-wrap items-center">
				{tags.map((tag) => (
					<button
						key={tag}
						onClick={() => handleTagClick(tag)}
						className={`rounded-sm p-1 mr-1 mb-1 text-sm sm:text-base shadow-sm
              ${
								selectedTags.includes(tag)
									? "text-white bg-watery-2"
									: "bg-white hover:bg-opacity-70"
							}
            `}
					>
						{tag}
					</button>
				))}
				<button
					onClick={() => router.push("/tags")}
					className="rounded-sm p-1 mr-1 mb-1 hover:bg-opacity-70 text-sm sm:text-base text-white bg-black"
				>
					태그 지우기
				</button>
			</div>
		</details>
	);
}

export default TagList;
