import supabase from "@/lib/supabase/client";

import type { SortType, CategoryType } from "./Posts";

export async function getPosts(
	sortType: SortType,
	keyword: string,
	from: number = 0,
	to: number = 15,
	categoryName: CategoryType | "",
): Promise<Post[] | null> {
	const decodeKeyword = decodeURIComponent(keyword);

	let query = supabase
		.from("posts")
		.select("*")
		.ilike("title", `%${decodeKeyword}%`);

	if (categoryName !== "") {
		query = query.eq("category_name", categoryName);
	}

	const { data } = await query
		.order(sortType, { ascending: false })
		.range(from, to);

	return data;
}
