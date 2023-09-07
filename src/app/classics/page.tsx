import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import ClassicsContainer from "./ClassicsContainer";
import { createServerClient } from "@/utils/supabase-server";

export const metadata: Metadata = siteConfig.metaData["classics"];

export default async function ClassicsPage() {
	const supabase = createServerClient();
	const {
		data: classics,
		error,
		count,
	} = await supabase
		.from("all_classics")
		.select("*", { count: "exact" })
		.range(0, 15);

	if (error) {
		return (
			<div className="pt-20 text-center">
				<p>데이터 로딩 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
				<p>에러 내용: {error.message}</p>
			</div>
		);
	}

	return (
		<div className="px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<ClassicsContainer serverClassics={classics ?? []} count={count ?? 0} />
		</div>
	);
}
