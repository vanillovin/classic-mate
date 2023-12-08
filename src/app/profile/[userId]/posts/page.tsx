import Link from "next/link";

import { createServerClient } from "@/utils/supabase-server";

export default async function PostsPage({
	params,
}: {
	params: { userId: string };
}) {
	const supabase = createServerClient();

	const { data: posts } = await supabase
		.from("posts")
		.select()
		.eq("user_id", params?.userId)
		.order("created_at", { ascending: false })
		.range(0, 10);

	return (
		<section className="">
			<div className="flex items-center justify-between">
				<h2 className="text-lg sm:text-xl font-semibold">작성한 게시글</h2>
				{/* <Link href={""} /> */}
			</div>
			<ul className="p-1 rounded-sm mt-2 overflow-y-scroll profile-scrollbar bg-white/40">
				{(posts || [])?.map((post, i) => (
					<li
						key={i}
						className="w-full transition-all border-b last:border-b-0 bg-white"
					>
						<Link
							href={`/classical-music/${post.id}`}
							aria-label={`${post.title} 게시글로 연결되는 링크`}
							className="group flex items-center justify-between w-full h-full p-2"
						>
							<span className="font-medium mr-1 group-hover:underline underline-offset-2 text-sm sm:text-base">
								{post.title}
							</span>
							<time
								dateTime={post.created_at}
								className="text-xs sm:text-sm text-gray-400"
							>
								{post.created_at.split("T")[0]}
							</time>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
