import React from "react";
import SortOptions from "./SortOptions";
import CategorySelect from "./CategorySelect";
import LoadingSkeleton from "./LoadingSkeleton";
import KeywordSearchForm from "./KeywordSearchForm";

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

			<div className="text-sm sm:text-base flex flex-wrap gap-1 sm:gap-2 items-center justify-between mt-10">
				<div className="flex items-center justify-center px-2 py-1 rounded-sm transition-colors shadow-sm bg-pantone-toffee hover:bg-pantone-cocoa text-warm-vintage-off-white">
					새글쓰기
				</div>
				<CategorySelect />
				<SortOptions />
			</div>

			<div className="flex items-center justify-center mt-4 mb-8">
				<KeywordSearchForm />
			</div>

			<LoadingSkeleton />
		</section>
	);
}
