"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
	updateSearchParams,
	clearParamByName,
} from "@/utils/searchParamsUtils";

function CategorySelect() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const selectedCat = searchParams.get("cat") ?? "전체";

	function updateParamAndNavigate(name: string, value: string) {
		const newSearchParams = updateSearchParams(searchParams, name, value);
		router.push(`/community?${newSearchParams}`);
	}

	function clearCatParamAndNavigate() {
		const newSearchParams = clearParamByName(searchParams, "cat");
		router.push(`/community?${newSearchParams}`);
	}

	return (
		<ul className="flex items-center gap-x-1 sm:gap-x-2">
			{["전체", "자유", "클래식"].map((cat, index) => (
				<li key={index} className="">
					<button
						onClick={() => {
							if (cat === "전체") clearCatParamAndNavigate();
							else updateParamAndNavigate("cat", cat);
						}}
						className={`w-full px-2 sm:px-3 py-1 transition-colors rounded-sm
                 ${
										selectedCat === cat
											? "font-semibold bg-pantone-latte/70"
											: "hover:bg-pantone-latte/50"
									}
                `}
					>
						{cat}
					</button>
				</li>
			))}
		</ul>
	);
}

export default CategorySelect;
