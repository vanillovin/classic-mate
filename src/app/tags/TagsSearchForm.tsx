"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type TagsSearchFormProps = { tags: string[] };

function TagsSearchForm({ tags }: TagsSearchFormProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [searchInput, setSearchInput] = useState("");
	const [error, setError] = useState("");

	const isValidTag = (tag: string) => /^[가-힣]+$/g.test(tag);
	const isTagAlreadySelected = (tag: string) =>
		[...Array(3)].some(
			(_, i) => searchParams.get(`tag${i + 1}`) === encodeURIComponent(tag),
		);
	const isTagLimitReached = () =>
		[...Array(3)].every((_, i) => searchParams.has(`tag${i + 1}`));

	const handleSearchSubmit = () => {
		if (!isValidTag(searchInput)) {
			setError("공백 없이 한글로만 입력해 주세요.");
			return;
		}

		if (isTagAlreadySelected(searchInput)) {
			setError("이미 선택된 태그입니다.");
			return;
		}

		if (isTagLimitReached()) {
			setError("최대 3개의 태그를 선택할 수 있습니다.");
			return;
		}

		const matchingTag = tags.find((tag) => tag === searchInput);

		if (!matchingTag) {
			setError("일치하는 태그가 없습니다.");
			return;
		}

		const params = new URLSearchParams(searchParams.toString());
		let nextTagIndex = 1;

		while (params.has(`tag${nextTagIndex}`)) nextTagIndex++;

		params.set(`tag${nextTagIndex}`, encodeURIComponent(matchingTag));

		router.push(`tags?${params.toString()}`);

		setError("");
		setSearchInput("");
	};

	return (
		<>
			<form
				onSubmit={(evt) => {
					evt.preventDefault();
					handleSearchSubmit();
				}}
				className="relative w-full mb-8"
			>
				<input
					type="text"
					value={searchInput}
					placeholder="클래식 음악 관련 태그를 입력해 주세요."
					aria-label="클래식 음악 검색을 위한 태그를 입력해 주세요."
					onChange={({ target: { value } }) => setSearchInput(value)}
					className={`w-full px-3 py-2 bg-opacity-80 border-2 rounded-xl text-sm md:text-base bg-white shadow-sm
            border-simple-palette-gold hover:border-autumn-gold focus:outline-none focus:border-pantone-metallic-gold`}
				/>
				{searchInput && <CancelButton onClick={() => setSearchInput("")} />}
				<button type="submit" aria-label="입력한 태그로 검색하기">
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
				{error && (
					<p role="alert" className="absolute pl-1 text-vintage-holiday-red">
						{error}
					</p>
				)}
			</form>
		</>
	);
}

export default TagsSearchForm;

function CancelButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label="검색어 지우기"
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
