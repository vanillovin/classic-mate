"use client";

import Link from "next/link";
import Image from "next/image";

import ClassicLikeButton from "@/components/classics/ClassicLikeButton";

function ClassicItem({
	classic,
	likeCount,
}: {
	classic: Classic;
	likeCount: number;
}) {
	return (
		<Link
			href={`/classics/${classic.id}`}
			className="rounded-md shadow-md p-2 cursor-pointer flex flex-col hover:shadow-lg justify-between transition-all bg-white bg-opacity-95 hover:bg-simple-palette-gold/50 hover:scale-102"
		>
			<div>
				<div className="flex items-center justify-between">
					<h2 className="text-sm sm:text-base font-semibold">
						{classic.title}
					</h2>
					<ClassicLikeButton
						className="pl-1 pb-1"
						classicId={classic.id}
						classicTitle={classic.title}
						serverLikeCount={likeCount}
					/>
				</div>
				<p className="text-xs sm:text-sm my-1">
					{classic.description.length > 70
						? `${classic.description.substring(0, 70)}...`
						: classic.description}
				</p>
				<ul className={`flex flex-wrap items-center gap-1`}>
					{classic.tags.map((tag) => (
						<li
							key={tag}
							className="text-xs sm:text-sm rounded-sm p-1 bg-vintage-holiday-red text-white"
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<div className="relative rounded-sm overflow-hidden h-28 sm:h-36 mt-2">
				<Image src={classic.cover_image} alt={`cover`} fill={true} />
			</div>
		</Link>
	);
}

export default ClassicItem;
