import supabase from "@/lib/supabase/client";

export async function getClassicComments(
	classicId: string,
): Promise<ClassicComment[]> {
	const { data } = await supabase
		.from("classic_comments")
		.select("*")
		.eq("classic_id", classicId)
		.order("created_at", { ascending: false });
	return data ?? [];
}
