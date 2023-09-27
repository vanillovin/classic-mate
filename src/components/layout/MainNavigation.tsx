"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import SignOutButton from "../SignOutButton";
import { useAuth } from "../providers/auth-provider";
import { useSupabase } from "../providers/supabase-provider";

function MainNavigation() {
	const { profile } = useAuth();
	const { session } = useSupabase();
	const pathname = usePathname();
	// const [scrollY, setScrollY] = useState(0);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		setScrollY(window.scrollY);
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	// const isScrolled = scrollY > 0;

	return (
		<header
			className={`w-full sticky top-0 z-20 flex items-center justify-center px-4 h-12 sm:h-16 select-none bg-white/95 backdrop-blur-sm transition-all shadow-sm`}
		>
			<nav className="w-full max-w-6xl flex items-center justify-between">
				<Link
					href="/"
					className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-pantone-california-gold to-pantone-metallic-gold animate-fade-in"
				>
					{siteConfig.name}
				</Link>
				<div className="md:hidden dropdown dropdown-end">
					<button
						aria-haspopup="true"
						aria-controls="dropdown-menu"
						className="flex items-center justify-center group cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 text-pantone-pale-gold"
						>
							<path
								fillRule="evenodd"
								d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					<ul
						id="dropdown-menu"
						tabIndex={0}
						className="menu dropdown-content z-10 p-2 shadow bg-base-100 rounded-box w-44 sm:w-48 mt-4 text-sm sm:text-base"
					>
						{session && (
							<li>
								<Link
									href={`/profile/${session.user.id}`}
									className="font-medium rounded-bl-none rounded-br-none"
								>
									{profile?.nickname ?? "꿀메"}님
								</Link>
							</li>
						)}
						{siteConfig.mainNav
							.slice(1, siteConfig.mainNav.length)
							.map((nav, index) => (
								<li key={index}>
									<Link
										href={nav.href}
										className={`rounded-none font-medium
                        ${
													!session &&
													index === 0 &&
													"rounded-tl-lg rounded-tr-lg"
												}
                        ${pathname === nav.href && "font-semibold bg-gray-200"}
                    `}
									>
										{nav.title}
									</Link>
								</li>
							))}
						{!session ? (
							<li>
								<Link
									href={"/login"}
									className="font-semibold rounded-tl-none rounded-tr-none bg-pantone-starwhite"
								>
									로그인·회원가입
								</Link>
							</li>
						) : (
							<li>
								<SignOutButton className="font-semibold rounded-tl-none rounded-tr-none text-vintage-holiday-red">
									로그아웃
								</SignOutButton>
							</li>
						)}
					</ul>
				</div>
				<ul className="max-w-6xl hidden md:flex items-center font-medium gap-x-3">
					{siteConfig.mainNav
						.slice(1, siteConfig.mainNav.length)
						.map((nav, index) => (
							<li key={index}>
								<Link
									href={nav.href}
									className={`transition-all
                    ${
											pathname === nav.href
												? "text-vintage-holiday-brown font-semibold"
												: "text-pantone-metallic-gold hover:text-vintage-holiday-brown"
										}
                  `}
								>
									{nav.title}
								</Link>
							</li>
						))}
					{session ? (
						<li className="flex items-center rounded-sm h-7">
							<Link
								data-tip="프로필"
								href={`/profile/${session.user.id}`}
								className="tooltip tooltip-bottom border-r transition-all px-1 h-full flex items-center justify-center bg-pantone-powder hover:bg-pantone-champagne border-pantone-champagne"
							>
								{profile?.nickname ?? "꿀메"}님
							</Link>
							<SignOutButton className="tooltip tooltip-bottom px-1 h-full bg-pantone-powder hover:bg-pantone-champagne">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
									/>
								</svg>
							</SignOutButton>
						</li>
					) : (
						<li>
							<Link
								href="/login"
								className="bg-pantone-california-gold bg-opacity-50 text-xs sm:text-sm text-white rounded-sm flex items-center px-1 hover:bg-opacity-70 transition-all"
							>
								로그인·회원가입
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
