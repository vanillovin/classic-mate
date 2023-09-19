import notFound from "./not-found";

import { convertToEmbeddedURL } from "@/utils/youtubeUtils";
import { createServerClient } from "@/utils/supabase-server";
import Comments from "./Comments";
import TagLinkList from "@/components/TagLinkList";
import ClassicLikeButton from "@/components/classics/ClassicLikeButton";

export default async function ClassicDetailPage({
	params,
}: { params: { classicId: string } }) {
	const supabase = createServerClient();
	const { data: classics } = await supabase
		.from("all_classics")
		.select("*")
		.eq("id", params.classicId);
	const { data: comments } = await supabase
		.from("classic_comments")
		.select("*")
		.eq("classic_id", params.classicId)
		.order("created_at", { ascending: false });

	const classic = classics?.[0];

	if (!classic) return notFound();

	return (
		<section className="w-full flex flex-col items-center p-3 sm:p-6">
			<h1 className="text-xl sm:text-2xl font-semibold">{classic.title}</h1>
			<ul className="flex items-center text-sm sm:text-base">
				<li className="mr-1 text-sm sm:text-base">{classic.composer} ·</li>
				<li className="mr-1 text-sm sm:text-base">{classic.genre} ·</li>
				<li className="text-sm sm:text-base">{classic.year}</li>
			</ul>
			<p className="text-center text-sm sm:text-base my-4 sm:px-12">
				{classic.description}
			</p>
			<ClassicLikeButton
				isShowLikeCount
				classicId={classic.id}
				classicTitle={classic.title}
				serverLikeCount={classic.like_count}
				className="rounded-sm bg-white p-1 mb-4 hover:bg-opacity-70 transition-all"
			/>
			<div className="flex items-center">
				<p className="font-medium">태그 :</p>
				<TagLinkList
					tags={classic.tags}
					className="border-b-2 border-white px-1 ml-1 text-sm sm:text-base hover:text-white transition-all"
				/>
			</div>
			<div className="w-full h-[300px] sm:h-[600px] sm:px-12 mt-8">
				<iframe
					loading="lazy"
					src={`${convertToEmbeddedURL(classic.video_url ?? "")}`}
					title={`${classic.title} 유튜브 동영상 재생`}
					allowFullScreen
					className="w-full h-full rounded-sm"
				></iframe>
			</div>
			<Comments classicId={params.classicId} comments={comments ?? []} />
		</section>
	);
}
