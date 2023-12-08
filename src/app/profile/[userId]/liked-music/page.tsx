import React from "react";
import Link from "next/link";

import { createServerClient } from "@/utils/supabase-server";

export default async function LikedMusicPage({
	params,
}: {
	params: { userId: string };
}) {
	const supabase = createServerClient();

	const { data: likes } = await supabase
		.from("classical_music_likes")
		.select()
		.eq("user_id", params?.userId)
		.order("created_at", { ascending: false })
		.range(0, 10);

	return (
		<div className="">
			<section className="">
				<div className="flex items-center justify-between">
					<h2 className="text-lg sm:text-xl font-semibold">좋아하는 클래식</h2>
				</div>
				<ul className="p-1 rounded-sm mt-2 overflow-y-scroll profile-scrollbar bg-white/40">
					{(likes || [])?.map((like, i) => (
						<li
							key={i}
							className="w-full transition-all border-b last:border-b-0 bg-white"
						>
							<Link
								href={`/classical-music/${like.classic_id}`}
								aria-label={`${like.classical_music_title} 클래식 음악으로 연결되는 링크`}
								className="group flex items-center justify-between w-full h-full p-2"
							>
								<span className="font-medium mr-1 group-hover:underline underline-offset-2 text-sm sm:text-base">
									{like.classical_music_title}
								</span>
								<time
									dateTime={like.created_at}
									className="text-xs sm:text-sm text-gray-400"
								>
									{like.created_at.split("T")[0]}
								</time>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
