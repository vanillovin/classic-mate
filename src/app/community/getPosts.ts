import supabase from "@/lib/supabase/client";

import type { SortType } from "./Posts";

export async function getPosts(
	sortType: SortType,
	keyword: string,
	from: number = 0,
	to: number = 15,
): Promise<Post[] | null> {
	const decodeKeword = decodeURIComponent(keyword);
	const { data } = await supabase
		.from("test_posts")
		.select("*")
		.ilike("title", `%${decodeKeword}%`)
		.order(sortType, { ascending: false })
		.range(from, to);
	return data;
}
