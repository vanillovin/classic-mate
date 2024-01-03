import Link from "next/link";

import { createServerClient } from "@/utils/supabase-server";

type CommentsPageProps = {
	params: { userId: string };
};

export default async function CommentsPage({ params }: CommentsPageProps) {
	const supabase = createServerClient();

	const { data: comments, error } = await supabase
		.from("comments")
		.select()
		.eq("user_id", params?.userId)
		.order("created_at", { ascending: false })
		.range(0, 10);

	return (
		<section className="">
			<div className="flex items-center justify-between">
				<h2 className="text-lg sm:text-xl font-semibold">작성한 게시글 댓글</h2>
			</div>
			<ul className="p-1 rounded-sm mt-2 overflow-y-scroll profile-scrollbar bg-white/40">
				{(comments || [])?.map((comment, i) => (
					<li
						key={i}
						className="w-full transition-all border-b last:border-b-0 bg-white"
					>
						<Link
							href={`/community/${comment.post_id}`}
							aria-label={`${comment.post_title} 게시글로 연결되는 링크`}
							className="group flex items-center justify-between w-full h-full p-2"
						>
							<div className="flex flex-col">
								<span className="font-medium mr-1 group-hover:underline underline-offset-2 text-sm sm:text-base">
									{comment.post_title}
								</span>
								<span className="mr-1 group-hover:underline underline-offset-2 text-xs sm:text-sm text-vintage-holiday-gray">
									{comment.content}
								</span>
							</div>
							<time
								dateTime={comment.created_at}
								className="text-xs sm:text-sm text-gray-400"
							>
								{comment.created_at.split("T")[0]}
							</time>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
