"use client";

import Link from 'next/link';
import { useState } from "react";
import { useSearchParams } from 'next/navigation';

import supabase from '@/lib/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { getPagination } from '@/utils/pagination';
import ClassicList from "./ClassicList";
import ClassicSearchForm from "@/components/classics/ClassicSearchForm";
import LoadingPiano from '@/components/LoadingPiano';

// const SELECTED_FIELDS = "id, title, author"; // 필요한 필드
const ITEMS_PER_PAGE = 16; // 페이지당 아이템 수

async function fetchClassics(from: number, to: number) {
  const { data } = await supabase
    .from("all_classics")
    .select('*')
    .range(from, to);
	return data;
}

function ClassicsContainer({
	serverClassics,
	count,
}: {
  serverClassics: Classic[];
  count: number;
}) {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page") ?? "1";
  const [searchQuery, setSearchQuery] = useState("");
  
  const { from, to } = getPagination(count, +pageParam, 16);
  const suspenseOption = false;
  const { isLoading, data, isError } = useQuery({
    queryKey: ["classics", pageParam],
		queryFn: () => fetchClassics(from, to),
		initialData: serverClassics,
		suspense: suspenseOption,
  });
  
  if (isLoading) return <LoadingPiano />
  
  if (!data || isError) {
    return (
      <div className="text-center mt-20">
        <p>요청하신 페이지가 없거나 데이터가 존재하지 않습니다.</p>
        <Link href="/classics" className="underline font-medium">클래식 목록으로 돌아가기</Link>
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
        <ul className="flex items-center gap-x-2 ">
          {Array.from({ length: Math.ceil(count / ITEMS_PER_PAGE) }).map((_, idx) => (
            <li
              key={idx}
              className={`rounded-sm w-6 h-6 text-center transition-all shadow-sm hover:bg-pantone-metallic-gold
                ${+pageParam === idx + 1 ? ' bg-pantone-metallic-gold' : 'bg-white'}
              `}
            >
              <Link
                href={{
                  pathname: "/classics",
                  query: { page: idx + 1 },
                }}
                className="w-full h-full"
              >{idx + 1}</Link>
            </li>
          ))}
        </ul>
      </div>
		</>
	);
}

export default ClassicsContainer;
