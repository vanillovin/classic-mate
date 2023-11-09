import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import SignOutButton from "@/components/SignOutButton";
import { createServerClient } from "@/utils/supabase-server";

export default async function Layout({
	params,
	children,
}: {
	params: { userId: string };
	children: React.ReactNode;
}) {
	const supabase = createServerClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();
	const { data } = await supabase
		.from("profiles")
		.select()
		.eq("id", params.userId);

	const profile = data?.[0];

	// if (!session) redirect("/unauthenticated");

	if (!profile) return notFound();

	return (
		<section className="max-w-6xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6 pb-24 h-screen">
			<div className="flex flex-col sm:flex-row shadow-md h-full">
				<div className="flex flex-row sm:flex-col p-3 sm:p-5 w-full sm:w-fit bg-[#FFF]">
					<div className="relative w-24 h-24 sm:w-40 sm:h-40 rounded-sm overflow-hidden">
						<Image
							src={
								"https://upload.wikimedia.org/wikipedia/commons/b/b1/Edvard_Munch_-_The_Sun_%281911%29.jpg"
							}
							alt="profile image"
							fill={true}
							className="object-cover"
						/>
					</div>
					<div className="ml-2 sm:ml-0 sm:p-1">
						<p className="font-semibold sm:mt-2">
							{profile.nickname || "꿀메"}
						</p>
						<p className="text-sm sm:text-base">{profile.website}</p>
						<p className="text-sm sm:text-base">{profile.description}</p>
						{session && session.user.id === params.userId && (
							<div className="flex gap-1 py-1">
								<Link
									href={`/profile/${params.userId}/edit`}
									className="rounded-sm p-1 font-light text-sm sm:text-base bg-[#F5E8C7] hover:bg-[#DEBA9D]"
								>
									회원정보수정
								</Link>
								<SignOutButton className="rounded-sm p-1 font-light text-sm sm:text-base text-white bg-[#9E7777] hover:bg-[#6F4C5B]">
									로그아웃
								</SignOutButton>
							</div>
						)}
						<ul className=""></ul>
					</div>
				</div>
				<div className="flex-1 p-3 sm:p-5 overflow-y-scroll profile-scrollbar bg-[#F2F2F2]">
					{children}
				</div>
			</div>
		</section>
	);
}
