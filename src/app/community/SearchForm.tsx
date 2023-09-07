"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SearchForm() {
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

	function setSortParamAndNavigate(name: string) {
		const params = new URLSearchParams(searchParams.toString());
		params.set("sort", name);
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
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setKeywordParamAndNavigate();
				}}
				className="h-8 flex items-center border-b border-black focus-within:border-pantone-berkeley-blue"
			>
				<input
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					placeholder="게시글 제목을 입력해주세요."
					className="rounded-sm h-full px-2 focus:outline-none bg-transparent placeholder:font-light"
					required
				/>
				<button type="submit" className="px-2 h-full bg-transparent">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1"
						stroke="currentColor"
						className="w-5 h-5 text-black "
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
						className="px-2 h-full"
					>
						✕
					</button>
				)}
			</form>

			<div className="dropdown dropdown-end">
				<label tabIndex={0} className="group cursor-pointer">
					<button className="flex items-center hover:text-pantone-berkeley-blue">
						최신순
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
							/>
						</svg>
					</button>
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content w-28 z-10 shadow bg-base-100 rounded-sm mt-2 text-sm sm:text-base"
				>
					{[
						{ name: "created_at", title: "최신순" },
						{ name: "comment_count", title: "댓글순" },
						{ name: "view_count", title: "조회순" },
					].map((sort, index) => (
						<li key={index} className="transition-colors hover:bg-gray-100">
							<button
								onClick={() => setSortParamAndNavigate(sort.name)}
								className="w-full px-3 py-2 text-start"
							>
								{sort.title}
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default SearchForm;
