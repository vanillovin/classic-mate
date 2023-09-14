import React from "react";
import type { Metadata } from "next";
import { createServerClient } from "@/utils/supabase-server";

import { siteConfig } from "@/config/site";
import TagsContainer from "./TagsContainer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = siteConfig.metaData["tags"];

type Props = {
	params?: { num?: string };
	searchParams?: { tag1?: string; tag2?: string; tag3?: string };
};

export default async function TagsPage(props: Props) {
	const supabase = createServerClient();
	const { data, error } = await supabase.from("all_classics").select();
	const selectedTags = [
		decodeURIComponent(props?.searchParams?.tag1 ?? ""),
		decodeURIComponent(props?.searchParams?.tag2 ?? ""),
		decodeURIComponent(props?.searchParams?.tag3 ?? ""),
	];

	if (error) {
		return <div>오류가 발생했습니다: {error.message}</div>;
	}

	return (
		<div className="px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<TagsContainer classics={data ?? []} selectedTags={selectedTags} />
			<ScrollToTopButton />
		</div>
	);
}
