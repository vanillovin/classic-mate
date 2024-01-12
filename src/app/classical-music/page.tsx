import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import HydratedClassicalMusics from "./HydratedClassicalMusics";

export const metadata: Metadata = siteConfig.metaData["classical-music"];

// export const dynamic = "force-dynamic";

export default async function ClassicalMusicPage() {
	return (
		<div className="max-w-6xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			{/* @ts-expect-error Server Component */}
			<HydratedClassicalMusics />
		</div>
	);
}
