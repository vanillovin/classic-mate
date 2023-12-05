"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { updateSearchParams } from "@/utils/searchParamsUtils";

const sortOptions = [
	{ name: "created_at", title: "최신순" },
	{ name: "comment_count", title: "댓글순" },
	{ name: "view_count", title: "조회순" },
];

function SortOptions() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const selectedSortOption = searchParams.get("sort");

	function setParamAndNavigate(name: string, value: string) {
		const newSearchParams = updateSearchParams(searchParams, name, value);
		router.push(`/community?${newSearchParams}`);
	}

	return (
		<div className="dropdown dropdown-end text-black">
			<label tabIndex={0} className="group cursor-pointer">
				<button className="flex items-center px-1 sm:px-3 py-1 rounded-sm transition-colors hover:bg-pantone-latte">
					{sortOptions.find((option) => option.name === selectedSortOption)
						?.title ?? "최신순"}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 sm:w-6 sm:h-6"
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
				{sortOptions.map((sort, index) => (
					<li key={index} className="transition-colors hover:bg-pantone-cream">
						<button
							onClick={() => setParamAndNavigate("sort", sort.name)}
							className="w-full px-3 py-2 text-start"
						>
							{sort.title}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SortOptions;
