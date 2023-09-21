import React from "react";
import SearchForm from "./SearchForm";
import LoadingSkeleton from "./LoadingSkeleton";

export default function Loading() {
	return (
		<section className="max-w-6xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<div
				aria-label="제목"
				className="shadow-sm rounded-sm p-3 sm:p-4 bg-white"
			>
				<h1 className="font-semibold text-lg sm:text-2xl">자유 게시판</h1>
				<p className="text-sm sm:text-base">
					일상과 클래식 관련 주제로 자유롭게 소통하는 공간 ᐛ
				</p>
			</div>

			<div className="flex flex-wrap gap-2 justify-between my-10">
				<SearchForm />
			</div>

			<LoadingSkeleton />
		</section>
	);
}
