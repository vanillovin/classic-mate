"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function TagsSearchForm({ tags }: { tags: string[] }) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [searchInput, setSearchInput] = useState("");

	const isValidTag = (tag: string) => {
		return /^[가-힣\s]+$/g.test(tag);
	};

	const handleSearchSubmit = () => {
		if (searchInput.trim() !== "" && isValidTag(searchInput)) {
			const params = new URLSearchParams(searchParams.toString());
			let nextTagIndex = 1;

			while (params.has(`tag${nextTagIndex}`) && nextTagIndex <= 3) {
				nextTagIndex++;
			}

			if (nextTagIndex <= 3) {
				const matchingTag = tags.find((tag) => tag === searchInput);

				if (!matchingTag) {
					alert("일치하는 태그가 없습니다.");
					return;
				}

				for (let i = 1; i <= 3; i++) {
					if (params.get(`tag${i}`) === encodeURIComponent(matchingTag)) {
						alert("이미 선택된 태그입니다.");
						return;
					}
				}

				params.set(`tag${nextTagIndex}`, encodeURIComponent(matchingTag));
				router.push(`tags?${params.toString()}`);
				setSearchInput("");
			} else {
				alert("최대 3개의 태그를 선택할 수 있습니다.");
			}
		}
	};

	return (
		<form
			onSubmit={(evt) => {
				evt.preventDefault();
				handleSearchSubmit();
			}}
			className="relative w-full mb-4"
		>
			<input
				aria-label="Search Classics"
				type="text"
				value={searchInput}
				onChange={({ target: { value } }) => setSearchInput(value)}
				placeholder=""
				className={`w-full px-3 py-2 bg-opacity-80 border-2 rounded-xl text-sm md:text-base bg-white shadow-sm
          border-simple-palette-gold hover:border-autumn-gold focus:outline-none focus:border-pantone-metallic-gold`}
			/>
			{/* {value && <CancelButton onClick={onClick} />} */}
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

export default TagsSearchForm;

function CancelButton({ onClick }: { onClick: () => void }) {
	return (
		<button
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
