"use client";

import Link from "next/link";
import Image from "next/image";

import LikeCheckbox from "@/components/classical-music/LikeCheckbox";

type ClassicalMusicItemProps = {
	classicalMusic: Classic;
	likeCount: number;
};

function ClassicalMusicItem({
	classicalMusic,
	likeCount,
}: ClassicalMusicItemProps) {
	return (
		<Link
			href={`/classical-music/${classicalMusic.id}`}
			className="rounded-md shadow-md p-2 cursor-pointer flex flex-col hover:shadow-lg justify-between transition-all bg-white/95 hover:bg-simple-palette-gold/50 hover:scale-102"
		>
			<div>
				<div className="flex items-center justify-between">
					<h2 className="text-sm sm:text-base font-semibold overflow-hidden whitespace-nowrap truncate">
						{classicalMusic.title}
					</h2>
					<LikeCheckbox
						classicalMusicId={classicalMusic.id}
						classicTitle={classicalMusic.title}
						serverLikeCount={likeCount}
					/>
				</div>
				<p className="text-xs sm:text-sm my-1 h-12 sm:h-16 overflow-hidden">
					{`${classicalMusic.description.substring(0, 70)}...`}
				</p>
				<ul className={`flex flex-wrap items-center gap-1`}>
					{classicalMusic.tags.map((tag) => (
						<li
							key={tag}
							className="text-xs sm:text-sm rounded-sm p-1 bg-vintage-holiday-red/95 text-white"
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<div className="relative rounded-sm overflow-hidden h-28 sm:h-36 mt-2">
				<Image src={classicalMusic.cover_image} alt={`cover`} fill={true} />
			</div>
		</Link>
	);
}

export default ClassicalMusicItem;
