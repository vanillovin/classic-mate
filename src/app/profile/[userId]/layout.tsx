import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

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
		<section className="px-6 pt-6 pb-24 h-screen">
			<div className="flex flex-col sm:flex-row shadow-md h-full">
				<div className="flex flex-row sm:flex-col p-3 sm:p-5 w-full sm:w-fit bg-[#FFF]">
					<div className="relative w-24 h-24 sm:w-40 sm:h-40 rounded-sm overflow-hidden">
						<Image
							src={"/kylie-paz-cbl1K6yJlDI-unsplash.jpg"}
							alt=""
							fill={true}
							className="object-cover"
						/>
					</div>
					<div className="ml-2 sm:ml-0 sm:p-1">
						<p className="font-semibold sm:mt-2">
							{profile.nickname || "클메"}
						</p>
						<p className="text-sm sm:text-base">{profile.website}</p>
						<p className="text-sm sm:text-base">{profile.description}</p>
						{session && session.user.id === params.userId && (
							<div className="flex gap-1 py-1">
								<Link
									href={`/profile/${params.userId}/edit`}
									className="rounded-sm p-1 text-sm sm:text-base bg-black text-white hover:bg-pantone-dark-navy"
								>
									회원정보수정
								</Link>
								<SignOutButton className="rounded-sm p-1 text-sm sm:text-base bg-[#F2F2F2] hover:bg-[#D6D8D7]">
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
