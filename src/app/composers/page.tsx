import type { Metadata } from "next";
import { Hahmlet } from "next/font/google";

import { siteConfig } from "@/config/site";
import ComposerList from "./ComposerList";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { createServerClient } from "@/utils/supabase-server";

const mont = Hahmlet({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = siteConfig.metaData["composers"];

export default async function ComposersPage() {
	const supabase = createServerClient();

	const { data: composers } = await supabase
		.from("composers")
		.select("*")
		.order("id", { ascending: true });

	return (
		<section className="px-6 pt-24 sm:pt-32 pb-24 -mt-14 sm:-mt-20 w-full h-full min-h-screen bg-pantone-babys-breath">
			<div className="max-w-6xl mx-auto">
				<h1
					className={`flex flex-col items-center text-2xl sm:text-4xl drop-shadow-md mb-16 ${mont.className}`}
				>
					시간을 넘어선 음악: <span>클래식 음악의 명장들</span>
				</h1>
				<ComposerList composers={composers ?? []} />
				<ScrollToTopButton />
			</div>
		</section>
	);
}
