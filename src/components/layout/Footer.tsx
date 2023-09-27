"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { type SiteConfig, siteConfig } from "@/config/site";

function Footer() {
	const pathname = usePathname();

	const bgColor = pathname.includes("picks")
		? "bg-pantone-brandy-sniffer"
		: "bg-pantone-metallic-gold";

	return (
		<footer
			className={`sticky w-full flex items-center justify-center top-[100vh] p-4 sm:p-8 text-center text-sm sm:text-base text-white ${bgColor}`}
		>
			<div className="w-full max-w-6xl">
				<ul className="flex items-center justify-center">
					{Object.keys(siteConfig.links).map((key, index) => (
						<li key={index}>
							<Link
								target="_blank"
								href={siteConfig.links[key as keyof SiteConfig["links"]]}
								className="hover:underline"
							>
								{key}
							</Link>
							{index < Object.values(siteConfig.links).length - 1 && (
								<span className="mx-1">|</span>
							)}
						</li>
					))}
				</ul>
				<p>© 2023 kkulassic.vercel.app</p>
				<p>Powered By Next.js Hosted By Vercel.</p>
				<hr className="my-4 mx-auto border-pantone-babys-breath" />
				<p>Made with 🤍 by Ming</p>
			</div>
		</footer>
	);
}

export default Footer;
