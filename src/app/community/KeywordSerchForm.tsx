"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function KeywordSearchForm() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [keyword, setKeyword] = useState("");

	function setKeywordParamAndNavigate() {
		if (keyword.trim().length < 1) {
			return;
		}
		const params = new URLSearchParams(searchParams.toString());
		params.set("keyword", encodeURIComponent(keyword));
		const newSearchParams = params.toString();
		router.push(`/community?${newSearchParams}`);
	}

	function cancelSearchKeyword() {
		setKeyword("");
		const params = new URLSearchParams(searchParams.toString());
		params.delete("keyword");
		const newSearchParams = params.toString();
		router.push(`/community?${newSearchParams}`);
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setKeywordParamAndNavigate();
			}}
			className="h-8 flex items-center border-b border-pantone-dark-navy text-black focus-within:border-pantone-brandy-sniffer"
		>
			<input
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="게시글 제목을 입력해주세요."
				className="rounded-sm h-full px-2 focus:outline-none bg-transparent placeholder:font-light"
				required
			/>
			<button
				type="submit"
				className="px-2 h-full bg-transparent"
				aria-label="검색하기"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-5 text-pantone-dark-navy hover:text-pantone-brandy-sniffer"
					// role='' // HTML요소의 역할
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</button>
			{searchParams.get("keyword") && (
				<button
					type="button"
					onClick={cancelSearchKeyword}
					className="px-2 h-full font-semibold text-pantone-dark-navy hover:text-pantone-brandy-sniffer"
				>
					✕
				</button>
			)}
		</form>
	);
}

export default KeywordSearchForm;
