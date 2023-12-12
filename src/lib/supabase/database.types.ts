export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			categories: {
				Row: {
					id: string;
					name: string;
				};
				Insert: {
					id?: string;
					name: string;
				};
				Update: {
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			classical_music: {
				Row: {
					composer: string;
					cover_image: string;
					description: string;
					genre: string[];
					id: number;
					like_count: number;
					tags: string[];
					title: string;
					video_url: string;
					year: number;
				};
				Insert: {
					composer: string;
					cover_image: string;
					description: string;
					genre?: string[];
					id?: never;
					like_count?: number;
					tags: string[];
					title: string;
					video_url: string;
					year: number;
				};
				Update: {
					composer?: string;
					cover_image?: string;
					description?: string;
					genre?: string[];
					id?: never;
					like_count?: number;
					tags?: string[];
					title?: string;
					video_url?: string;
					year?: number;
				};
				Relationships: [];
			};
			classical_music_comments: {
				Row: {
					classical_music_id: number;
					classical_music_title: string | null;
					content: string;
					created_at: string;
					id: number;
					nickname: string;
					updated_at: string;
					user_id: string;
				};
				Insert: {
					classical_music_id: number;
					classical_music_title?: string | null;
					content: string;
					created_at?: string;
					id?: never;
					nickname: string;
					updated_at?: string;
					user_id: string;
				};
				Update: {
					classical_music_id?: number;
					classical_music_title?: string | null;
					content?: string;
					created_at?: string;
					id?: never;
					nickname?: string;
					updated_at?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "classical_music_comments_classical_music_id_fkey";
						columns: ["classical_music_id"];
						isOneToOne: false;
						referencedRelation: "classical_music";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "classical_music_comments_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			classical_music_likes: {
				Row: {
					classical_music_id: number;
					classical_music_title: string;
					created_at: string;
					id: number;
					user_id: string;
				};
				Insert: {
					classical_music_id: number;
					classical_music_title: string;
					created_at?: string;
					id?: never;
					user_id: string;
				};
				Update: {
					classical_music_id?: number;
					classical_music_title?: string;
					created_at?: string;
					id?: never;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "classical_music_likes_classical_music_id_fkey";
						columns: ["classical_music_id"];
						isOneToOne: false;
						referencedRelation: "classical_music";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "classical_music_likes_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			comments: {
				Row: {
					content: string;
					created_at: string;
					id: number;
					nickname: string;
					post_id: string;
					post_title: string | null;
					updated_at: string;
					user_id: string;
				};
				Insert: {
					content: string;
					created_at?: string;
					id?: never;
					nickname: string;
					post_id: string;
					post_title?: string | null;
					updated_at?: string;
					user_id: string;
				};
				Update: {
					content?: string;
					created_at?: string;
					id?: never;
					nickname?: string;
					post_id?: string;
					post_title?: string | null;
					updated_at?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "comments_post_id_fkey";
						columns: ["post_id"];
						isOneToOne: false;
						referencedRelation: "posts";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "comments_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			composers: {
				Row: {
					birth_date: string;
					death_date: string;
					id: number;
					image_url: string;
					long_desc: string;
					name: string;
					name_kr: string;
					nationality: string;
					period: string;
					short_desc: string;
					style: string;
				};
				Insert: {
					birth_date?: string;
					death_date?: string;
					id?: number;
					image_url?: string;
					long_desc?: string;
					name?: string;
					name_kr?: string;
					nationality?: string;
					period?: string;
					short_desc?: string;
					style?: string;
				};
				Update: {
					birth_date?: string;
					death_date?: string;
					id?: number;
					image_url?: string;
					long_desc?: string;
					name?: string;
					name_kr?: string;
					nationality?: string;
					period?: string;
					short_desc?: string;
					style?: string;
				};
				Relationships: [];
			};
			messages: {
				Row: {
					id: number;
					inserted_at: string;
					text: string | null;
					user_id: string;
				};
				Insert: {
					id?: number;
					inserted_at?: string;
					text?: string | null;
					user_id: string;
				};
				Update: {
					id?: number;
					inserted_at?: string;
					text?: string | null;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "messages_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			posts: {
				Row: {
					category_name: string;
					comment_count: number;
					content: string;
					created_at: string;
					id: string;
					nickname: string;
					title: string;
					updated_at: string;
					user_id: string;
					view_count: number;
				};
				Insert: {
					category_name: string;
					comment_count?: number;
					content: string;
					created_at?: string;
					id: string;
					nickname: string;
					title: string;
					updated_at?: string;
					user_id: string;
					view_count?: number;
				};
				Update: {
					category_name?: string;
					comment_count?: number;
					content?: string;
					created_at?: string;
					id?: string;
					nickname?: string;
					title?: string;
					updated_at?: string;
					user_id?: string;
					view_count?: number;
				};
				Relationships: [
					{
						foreignKeyName: "posts_category_name_fkey";
						columns: ["category_name"];
						isOneToOne: false;
						referencedRelation: "categories";
						referencedColumns: ["name"];
					},
					{
						foreignKeyName: "posts_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			profiles: {
				Row: {
					avatar_url: string | null;
					description: string | null;
					full_name: string | null;
					id: string;
					nickname: string | null;
					updated_at: string | null;
					website: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					description?: string | null;
					full_name?: string | null;
					id: string;
					nickname?: string | null;
					updated_at?: string | null;
					website?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					description?: string | null;
					full_name?: string | null;
					id?: string;
					nickname?: string | null;
					updated_at?: string | null;
					website?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						isOneToOne: true;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (Database["public"]["Tables"] & Database["public"]["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
	  }
		? R
		: never
	: PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
			Database["public"]["Views"])
	? (Database["public"]["Tables"] &
			Database["public"]["Views"])[PublicTableNameOrOptions] extends {
			Row: infer R;
	  }
		? R
		: never
	: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof Database["public"]["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
	  }
		? I
		: never
	: PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
	? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
			Insert: infer I;
	  }
		? I
		: never
	: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof Database["public"]["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
	  }
		? U
		: never
	: PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
	? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
			Update: infer U;
	  }
		? U
		: never
	: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof Database["public"]["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
	? Database["public"]["Enums"][PublicEnumNameOrOptions]
	: never;
