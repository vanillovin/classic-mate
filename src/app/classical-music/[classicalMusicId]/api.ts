import supabase from "@/lib/supabase/client";

export async function getClassicalMusicComments(
	classicalMusicId: string,
): Promise<ClassicComment[]> {
	const { data } = await supabase
		.from("classical_music_comments")
		.select("*")
		.eq("classical_music_id", classicalMusicId)
		.order("created_at", { ascending: false });
	return data ?? [];
}
