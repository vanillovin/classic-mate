import type { Database as DB } from "@/lib/supabase/database.types";

declare global {
	type Database = DB;
	type Message = DB["public"]["Tables"]["messages"]["Row"];
	type Classic = DB["public"]["Tables"]["classical_music"]["Row"];
	type ClassicLike = DB["public"]["Tables"]["classical_music_likes"]["Row"];
	type ClassicComment =
		DB["public"]["Tables"]["classical_music_comments"]["Row"];
	type Profile = DB["public"]["Tables"]["profiles"]["Row"];
	type Post = DB["public"]["Tables"]["posts"]["Row"];
	type PostComment = DB["public"]["Tables"]["comments"]["Row"];
	type Composer = DB["public"]["Tables"]["composers"]["Row"];
}
