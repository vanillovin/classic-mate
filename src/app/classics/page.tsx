import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import HydratedClassics from './hydratedClassics';

export const metadata: Metadata = siteConfig.metaData["classics"];

export default async function ClassicsPage() {
	return (
		<div className="px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			{/* @ts-expect-error Server Component */}
      <HydratedClassics />
		</div>
	);
}
