import { notFound } from "next/navigation";

import PostContainer from "./PostContainer";
import CommentContainer from "./CommentContainer";
import { createServerClient } from "@/utils/supabase-server";

// export const revalidate = 60;

export default async function PostPage({
	params: { id },
}: { params: { id: string } }) {
	const supabase = createServerClient();
	// const { data: { user } } = await supabase.auth.getUser();
	const { data: post } = await supabase
		.from("test_posts")
		.select("*")
		.match({ id })
		.single();
	const { data: comments } = await supabase
		.from("test_comments")
		.select("*")
		.order("created_at", { ascending: false })
		.eq("post_id", id);

	if (!post) notFound();

	return (
		<article className="px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<div className="w-full flex flex-col sm:flex-row shadow-md bg-gradient-radial from-[#fff] to-[#f4f5f0]">
				<section className="w-full md:w-1/2 h-[350px] md:h-[700px] flex flex-col py-2 p-2 border-r">
					<PostContainer postId={id} serverPost={post} />
				</section>
				<section className="w-full md:w-1/2 h-[350px] md:h-[700px] flex flex-col p-2 gap-y-1 sm:gap-y-2">
					<CommentContainer postId={id} serverComments={comments ?? []} />
				</section>
			</div>
		</article>
	);
}
