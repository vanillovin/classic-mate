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
const ITEMS_PER_PAGE = 16; // 페이지당 아이템 수
const TOTAL_ITEMS = 60;

function ClassicsContainer() {
	const searchParams = useSearchParams();
	const pageParam = searchParams.get("page") ?? "1";
	const keywordParam = searchParams.get("keyword") ?? "";

	const { from, to } = getPagination(TOTAL_ITEMS, +pageParam, 16);
	const { isLoading, data, isError } = useQuery({
		queryKey: ["classics", pageParam, keywordParam],
		queryFn: () => getClassics(from, to, keywordParam),
		suspense: true,
  });

  if (isError || !data?.classics) {
    return (
      <div className="text-center mt-20">
        <p>요청하신 페이지가 없거나 데이터가 존재하지 않습니다.</p>
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
        <>
          <ClassicList classics={data.classics ?? []} />
          <div className="flex items-center justify-center mt-8">
            <Pagination
              pathname="/classics"
              currentPage={+pageParam}
              totalPages={Math.ceil((data.count ?? 0) / ITEMS_PER_PAGE)}
            />
			    </div>
        </>
      ): (
        <LoadingSkeleton />
      )}
		</>
	);
}

export default ClassicsContainer;
