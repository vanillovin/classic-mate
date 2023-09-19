import React from "react";
import Link from "next/link";

import { createServerClient } from "@/utils/supabase-server";

export default async function ProfilePage({
	params,
}: {
	params: { userId: string };
}) {
	const supabase = createServerClient();

	const [
		{ data: likes, error: likesError },
		{ data: posts, error: postsError },
	] = await Promise.all([
		supabase
			.from("classic_likes")
			.select()
			.eq("user_id", params?.userId)
			.order("created_at", { ascending: false })
			.range(0, 10),
		supabase
			.from("test_posts")
			.select()
			.eq("user_id", params?.userId)
			.order("created_at", { ascending: false })
			.range(0, 10),
	]);

	return (
		<div className="space-y-4">
			<section>
				<div className="flex items-center justify-between">
					<h2 className="text-lg sm:text-xl font-semibold">좋아요한 클래식</h2>
					{/* <Link href={""} /> */}
				</div>
				<ul className="rounded-sm mt-2 bg-white">
					{(likes || [])?.map((like, i) => (
						<li
							key={i}
							className="w-full transition-all border-b last:border-b-0"
						>
							<Link
								href={`/classics/${like.classic_id}`}
								aria-label={`${like.classic_title} 클래식 음악으로 연결되는 링크`}
								className="flex items-center justify-between w-full h-full p-2 hover:underline underline-offset-2"
							>
								<span className="font-medium mr-1">{like.classic_title}</span>
								<time
									dateTime={like.created_at}
									className="text-sm no-underline text-gray-400"
								>
									{like.created_at.split("T")[0]}
								</time>
							</Link>
						</li>
					))}
				</ul>
			</section>
			<section>
				<div className="flex items-center justify-between">
					<h2 className="text-lg sm:text-xl font-semibold">작성한 게시글</h2>
					{/* <Link href={""} /> */}
				</div>
				<ul className="rounded-sm mt-2 bg-white">
					{(posts || [])?.map((post, i) => (
						<li
							key={i}
							className="w-full transition-all border-b last:border-b-0"
						>
							<Link
								href={`/classics/${post.id}`}
								aria-label={`${post.title} 게시글로 연결되는 링크`}
								className="flex items-center justify-between w-full h-full p-2 hover:underline underline-offset-2"
							>
								<span className="font-medium mr-1">{post.title}</span>
								<time
									dateTime={post.created_at}
									className="text-sm no-underline text-gray-400"
								>
									{post.created_at.split("T")[0]}
								</time>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
