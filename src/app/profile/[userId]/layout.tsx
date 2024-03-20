import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import SignOutButton from "@/components/SignOutButton";
import { createServerClient } from "@/utils/supabase-server";

type ProfileLayoutProps = {
	params: { userId: string };
	children: React.ReactNode;
};

export default async function Layout({ params, children }: ProfileLayoutProps) {
	const supabase = createServerClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	const { data, error } = await supabase
		.from("profiles")
		.select()
		.eq("id", params.userId);

	const profile = data?.[0];

	if (!profile || error) {
		return notFound();
	}

	return (
		<section className="max-w-6xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6 pb-24 h-screen">
			<div className="flex flex-col sm:flex-row shadow-md h-full">
				<div className="flex flex-col gap-y-2 p-3 sm:p-5 w-full sm:w-fit bg-[#FFF]">
					<div className="flex flex-row sm:flex-col w-full items-center sm:items-start">
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
						<div className="ml-2 sm:ml-0 sm:mt-2 w-full">
							<p className="font-semibold">{profile.nickname || "꿀메"}</p>
							<p className="text-sm sm:text-base">{profile.website}</p>
							<p className="text-sm sm:text-base">{profile.description}</p>
							{session && session.user.id === params.userId && (
								<div className="flex gap-1 py-1">
									<Link
										href={`/profile/${params.userId}/edit`}
										className="rounded-sm p-1 font-light text-sm sm:text-base bg-[#F5E8C7] hover:bg-[#DEBA9D] transition-colors"
									>
										회원정보수정
									</Link>
									<SignOutButton className="rounded-sm p-1 font-light text-sm sm:text-base text-white bg-[#9E7777] hover:bg-[#6F4C5B] transition-colors">
										로그아웃
									</SignOutButton>
								</div>
							)}
						</div>
					</div>

					<ul className="flex flex-row sm:flex-col gap-x-2 sm:gap-x-0 sm:gap-y-3 sm:mt-4 text-sm sm:text-base">
						<li className="font-semibold">클래식</li>
						<li>
							<Link
								href={`/profile/${params.userId}/liked-music`}
								className="hover:underline"
							>
								좋아요
							</Link>
						</li>
						<li>
							<Link
								href={`/profile/${params.userId}/commented-music`}
								className="hover:underline"
							>
								댓글
							</Link>
						</li>
						<li className="font-semibold sm:mt-2">게시판</li>
						<li>
							<Link
								href={`/profile/${params.userId}/posts`}
								className="hover:underline"
							>
								게시글
							</Link>
						</li>
						<li>
							<Link
								href={`/profile/${params.userId}/comments`}
								className="hover:underline"
							>
								댓글
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1 p-3 sm:p-5 overflow-y-scroll profile-scrollbar bg-[#F2F2F2]">
					{children}
				</div>
			</div>
		</section>
	);
}
