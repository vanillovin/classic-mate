import notFound from "./not-found";

import Comments from "./Comments";
import TagLinkList from "@/components/TagLinkList";
import LikeCheckbox from "@/components/classical-music/LikeCheckbox";
import { convertToEmbeddedURL } from "@/utils/youtubeUtils";
import { createServerClient } from "@/utils/supabase-server";

type ClassicDetailPageProps = { params: { classicalMusicId: string } };

export default async function ClassicDetailPage({
	params: { classicalMusicId },
}: ClassicDetailPageProps) {
	const supabase = createServerClient();
	const { data: classics } = await supabase
		.from("classical_music")
		.select("*")
		.eq("id", classicalMusicId);
	const { data: comments } = await supabase
		.from("classical_music_comments")
		.select("*")
		.eq("classical_music_id", classicalMusicId)
		.order("created_at", { ascending: false });

	const classicalMusic = classics?.[0];

	if (!classicalMusic) return notFound();

	return (
		<section className="w-full max-w-6xl mx-auto flex flex-col items-center p-3 sm:p-6">
			<h1 className="text-xl sm:text-2xl font-semibold">
				{classicalMusic.title}
			</h1>
			<ul className="flex items-center text-sm sm:text-base gap-x-1 mt-1">
				<li className="text-sm sm:text-base">{classicalMusic.composer} ·</li>
				<li className="text-sm sm:text-base">
					{Array.isArray(classicalMusic.genre)
						? classicalMusic.genre.map((genre) => `${genre} `)
						: classicalMusic.genre}{" "}
					·
				</li>
				<li className="text-sm sm:text-base">{classicalMusic.year}</li>
			</ul>
			<p className="text-center text-sm sm:text-base my-4 sm:px-12">
				{classicalMusic.description}
			</p>
			<div className="flex items-center">
				{/* <p className="font-medium">태그 :</p> */}
				<TagLinkList
					tags={classicalMusic.tags}
					className="border-b-2 px-1 ml-1 text-sm sm:text-base transition-colors border-pantone-brandy-sniffer/80 hover:text-pantone-brandy-sniffer"
				/>
			</div>
			<LikeCheckbox
				isShowLikeCount
				classicalMusicId={classicalMusic.id}
				classicTitle={classicalMusic.title}
				serverLikeCount={classicalMusic.like_count}
				className="rounded-sm p-1 mt-6 mb-8 hover:bg-opacity-70 transition-colors bg-white"
			/>
			<div className="w-full h-[300px] sm:h-[600px] sm:px-12">
				<iframe
					loading="lazy"
					src={`${convertToEmbeddedURL(classicalMusic.video_url ?? "")}`}
					title={`${classicalMusic.title} 유튜브 동영상 재생`}
					allowFullScreen
					className="w-full h-full rounded-sm"
				></iframe>
			</div>
			<Comments
				classicalMusicId={classicalMusicId}
				classicalMusicTitle={classicalMusic.title}
				comments={comments ?? []}
			/>
		</section>
	);
}
