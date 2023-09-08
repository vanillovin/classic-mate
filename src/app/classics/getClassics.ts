import supabase from "@/lib/supabase/client";

export async function getClassics(
	from: number = 0,
  to: number = 15,
  keyword: string  = ""
): Promise<{ classics: Classic[] | null; count: number | null }> {
  const decodeKeword = decodeURIComponent(keyword);

	const { data, count } = await supabase
		.from("all_classics")
    .select("*", { count: "exact" })
    .ilike('title', `%${decodeKeword}%`)
    .range(from, to);
  
  return {
    classics: data || null,
    count: count || null,
  };
}
