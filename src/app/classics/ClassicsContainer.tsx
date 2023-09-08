"use client";

import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { getClassics } from "./getClassics";
import { getPagination } from "@/utils/pagination";
import ClassicList from "./ClassicList";
import Pagination from "@/components/Pagination";
import ClassicSearchForm from "@/components/classics/ClassicSearchForm";

// const SELECTED_FIELDS = "id, title, author"; // 필요한 필드
const ITEMS_PER_PAGE = 16; // 페이지당 아이템 수
const TOTAL_ITEMS = 60;

function ClassicsContainer() {
	const searchParams = useSearchParams();
	const pageParam = searchParams.get("page") ?? "1";
	const [searchQuery, setSearchQuery] = useState("");

	const { from, to } = getPagination(TOTAL_ITEMS, +pageParam, 16);
	const { isLoading, data, isError } = useQuery({
		queryKey: ["classics", pageParam],
		queryFn: () => getClassics(from, to),
		suspense: true,
	});

	if (!data || isError) {
		return (
			<div className="text-center mt-20">
				<p>요청하신 페이지가 없거나 데이터가 존재하지 않습니다.</p>
				<Link href="/classics" className="underline font-medium">
					클래식 목록으로 돌아가기
				</Link>
			</div>
		);
	}

	const filterdClassics = data.filter((classic) =>
		classic?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
	);
	const results = searchQuery ? filterdClassics : data;

	return (
		<>
			<ClassicSearchForm
				value={searchQuery}
				onClick={() => setSearchQuery("")}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setSearchQuery(e.target.value)
				}
				placeholder="클래식 제목 검색하기"
			/>
			<ClassicList classics={results} />
			<div className="flex items-center justify-center mt-8">
				<Pagination
					pathname="/classics"
					currentPage={+pageParam}
					totalPages={Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE)}
				/>
			</div>
		</>
	);
}

export default ClassicsContainer;
