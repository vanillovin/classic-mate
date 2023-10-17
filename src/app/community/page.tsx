import Link from "next/link";
import type { Metadata } from "next";

import Posts from "./Posts";
import SearchForm from "./SearchForm";
import { siteConfig } from "@/config/site";
import { createServerClient } from "@/utils/supabase-server";

export const metadata: Metadata = siteConfig.metaData["community"];

// export const revalidate = 60;

export default async function CommunityPage() {
	const supabase = createServerClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	const { data: posts, count } = await supabase
		.from("test_posts")
		.select("*", { count: "exact" });

	return (
		<section className="max-w-6xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<div
				aria-label="제목"
				className="shadow-md rounded-md p-3 sm:p-4 bg-white/90"
			>
				<h1 className="font-semibold text-lg sm:text-2xl">자유 게시판</h1>
				<p className="text-sm sm:text-base">
					일상과 클래식 관련 주제로 자유롭게 소통하는 공간 ᐛ
				</p>
			</div>

			<div className="flex flex-wrap gap-2 justify-between my-10">
				{user && (
					<Link
						href="/community/new"
						className="px-2 py-1 rounded-sm text-white transition-colors bg-[#404040] hover:bg-[#000]"
					>
						글쓰기
					</Link>
				)}
				<SearchForm />
			</div>

			<div className="flex flex-col">
				{!posts || !count ? (
					<div className="text-center">
						<h2>게시글이 없습니다.</h2>
						<p>첫 번째로 게시글을 작성해 보세요!</p>
					</div>
				) : (
					<Posts count={count} />
				)}
			</div>
		</section>
	);
}
