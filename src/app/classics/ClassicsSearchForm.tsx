"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import useKeywordSearchParam from "@/hooks/useSearchParam";

function ClassicsSearchForm() {
	const searchParams = useSearchParams();
	const { navigateWithNewKeywordParam, cancelKeywordSearchParam } =
		useKeywordSearchParam();
	const [keyword, setKeyword] = useState("");

	function handleSearchSubmit() {
		if (keyword.trim().length < 1) return;
		navigateWithNewKeywordParam(keyword);
	}

	function handleCancelSearch() {
		setKeyword("");
		cancelKeywordSearchParam();
	}

	return (
		<form
			className="relative w-full mb-4"
			onSubmit={(e) => {
				e.preventDefault();
				handleSearchSubmit();
			}}
		>
			<input
				aria-label="Search Classics"
				type="text"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="클래식 제목 검색하기"
				className={`w-full px-3 py-2 bg-opacity-80 border-2 rounded-xl text-sm md:text-base bg-white shadow-sm
          border-simple-palette-gold hover:border-autumn-gold focus:outline-none focus:border-pantone-metallic-gold`}
			/>
			{searchParams.get("keyword") && (
				<CancelButton onClick={handleCancelSearch} />
			)}
			<button type="submit">
				<svg
					className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5 sm:right-3 text-autumn-emerald"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</form>
	);
}

export default ClassicsSearchForm;

function CancelButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="absolute top-1/2 right-8 transform -translate-y-1/2 w-5 h-5 sm:right-10"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				className="text-autumn-darkred"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	);
}
