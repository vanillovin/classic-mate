import React from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { createServerClient } from "@/utils/supabase-server";

// 진 -> 연
// Watery Colour Story (바다)
//  #294361  #505C81  #6184AC  #B7D0D7
// Flower Shop (웜고급)
//  Blue-#415464  Creme-#D6D1C4  Golden-#BD9A5F
// WHITE MOONSTONE
//  hgray#85817F mgray#D6D8D7 sgray#F2F2F2 green#BCD0C9 darkblue#894057 blue#436A93

export default async function ProfilePage({
	params,
}: { params: { userId: string } }) {
	const supabase = createServerClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();
	const { data } = await supabase
		.from("profiles")
		.select()
		.eq("id", params.userId);
	const { data: classics } = await supabase.from("all_classics").select();
	const { data: likes } = await supabase
		.from("classic_likes")
		.select()
		.eq("user_id", params.userId);
	// const { data: posts } = await supabase.from('test_posts').select().eq('user_id', params.userId);

	const profile = data?.[0];

	if (!session) redirect("/unauthenticated");

	if (!profile) return notFound();

	return (
		<div className="">
			<h2 className="text-lg sm:text-xl font-semibold">좋아요한 클래식</h2>
			<ul className="rounded-sm mt-2 bg-white">
				{likes?.map((like) => (
					<li key={like.created_at} className="p-2 border-b-1  transition-all">
						<Link href={`/classics/${like.classic_id}`}>
							<span className="font-medium mr-1">
								{
									classics?.find((classic) => classic.id === like.classic_id)
										?.title
								}
							</span>
							<span className="text-sm">{like.created_at.split("T")[0]}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
