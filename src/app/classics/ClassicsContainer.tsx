"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { getClassics } from "./getClassics";
import { getPagination } from "@/utils/pagination";
import ClassicList from "./ClassicList";
import LoadingSkeleton from "./LoadingSkeleton";
import Pagination from "@/components/Pagination";
import ClassicsSearchForm from "./ClassicsSearchForm";

// const SELECTED_FIELDS = "id, title, author"; // 필요한 필드
const TOTAL_ITEMS = 60;
const ITEMS_PER_PAGE = 16; // 페이지당 아이템 수

function ClassicsContainer() {
	const searchParams = useSearchParams();
	const pageParam = searchParams.get("page") ?? "1";
	const keywordParam = searchParams.get("keyword") ?? "";

	const { from, to } = getPagination(TOTAL_ITEMS, +pageParam, ITEMS_PER_PAGE);
	const { isLoading, data, isError } = useQuery({
		queryKey: ["classics", pageParam, keywordParam],
		queryFn: () => getClassics(from, to, keywordParam),
		suspense: true,
	});

	if (isError || !Array.isArray(data?.classics)) {
		return (
			<div className="text-center mt-20">
				<p>요청하신 페이지가 없거나 데이터가 존재하지 않습니다.</p>
				{data?.error && <p>에러 메시지: {data.error.message}</p>}
				<Link href="/classics" className="underline font-medium">
					클래식 목록으로 돌아가기
				</Link>
			</div>
		);
	}

	return (
		<>
			<ClassicsSearchForm />
			{!isLoading ? (
				data.classics.length ? (
					<>
						{keywordParam && (
							<p className="m-1 font-light text-gray-400">
								검색결과 {data.classics.length}개 ({data.took}초)
							</p>
						)}
						<ClassicList classics={data.classics ?? []} />
						<div className="flex items-center justify-center mt-8">
							<Pagination
								pathname="/classics"
								currentPage={+pageParam}
								totalPages={Math.ceil((data.count ?? 0) / ITEMS_PER_PAGE)}
							/>
						</div>
					</>
				) : (
					<div className="text-center mt-8">
						<p className="m-1 font-light text-gray-400">
							검색결과 0개 ({data.took}초)
						</p>
						<p>
							<span className="font-semibold">
								{decodeURIComponent(keywordParam)}
							</span>
							와(과) 일치하는 클래식 작품이 없습니다.
						</p>
					</div>
				)
			) : (
				<LoadingSkeleton />
			)}
		</>
	);
}

export default ClassicsContainer;
