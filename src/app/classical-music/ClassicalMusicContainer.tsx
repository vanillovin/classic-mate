"use client";

import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { getPagination } from "@/utils/pagination";
import ClassicalMusicList from "./ClassicalMusicList";
import LoadingSkeleton from "./LoadingSkeleton";
import Pagination from "@/components/Pagination";
import SearchForm from "./SearchForm";
import { type ClassicsResult, getClassicalMusic } from "./getClassicalMusic";

// const SELECTED_FIELDS = "id, title, author"; // 필요한 필드
const ITEMS_PER_PAGE = 16;

function ClassicsContainer() {
	const queryClient = useQueryClient();
	const searchParams = useSearchParams();
	const page = searchParams.get("page") ?? "1";
	const keyword = searchParams.get("keyword") ?? "";
	const prefetchedData = queryClient.getQueryData<ClassicsResult>([
		"classics",
		page,
		keyword,
	]);

	const { from, to } = getPagination(
		prefetchedData?.count ?? 80,
		+page,
		ITEMS_PER_PAGE,
	);
	const { isLoading, data, isError } = useQuery({
		queryKey: ["classicalMusic", page, keyword],
		queryFn: () => getClassicalMusic(from, to, keyword),
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
			<SearchForm />
			{!isLoading ? (
				data.classics.length ? (
					<>
						{keyword && (
							<p className="m-1 font-light text-gray-400">
								검색결과 {data.classics.length}개 ({data.took}초)
							</p>
						)}
						<ClassicalMusicList classics={data.classics ?? []} />
						<div className="flex items-center justify-center mt-14">
							<Pagination
								pathname="/classical-music"
								currentPage={+page}
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
								{decodeURIComponent(keyword)}
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
