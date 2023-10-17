import Link from "next/link";

import { siteConfig } from "@/config/site";

function Footer() {
	const links = Object.entries(siteConfig.links);

	return (
		<footer
			className={`sticky w-full flex items-center justify-center top-[100vh] p-4 sm:p-8 text-center text-sm sm:text-base text-white bg-pantone-metallic-gold`}
		>
			<div className="w-full max-w-6xl">
				<ul className="flex items-center justify-center">
					{links.map(([key, value], index) => (
						<li key={key}>
							<Link target="_blank" href={value} className="hover:underline">
								{key}
							</Link>
							{index < links.length - 1 && <span className="mx-1">|</span>}
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
