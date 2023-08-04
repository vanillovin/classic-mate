export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      all_classics: {
        Row: {
          composer: string
          cover_image: string
          description: string
          genre: string
          id: number
          tags: string[]
          title: string
          video_url: string
          year: number
        }
        Insert: {
          composer: string
          cover_image: string
          description: string
          genre: string
          id?: never
          tags: string[]
          title: string
          video_url: string
          year: number
        }
        Update: {
          composer?: string
          cover_image?: string
          description?: string
          genre?: string
          id?: never
          tags?: string[]
          title?: string
          video_url?: string
          year?: number
        }
        Relationships: []
      }
      classic_comments: {
        Row: {
          classic_id: number
          content: string
          created_at: string
          id: number
          nickname: string
          updated_at: string
          user_id: string
        }
        Insert: {
          classic_id: number
          content: string
          created_at?: string
          id?: never
          nickname: string
          updated_at?: string
          user_id: string
        }
        Update: {
          classic_id?: number
          content?: string
          created_at?: string
          id?: never
          nickname?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "classic_comments_classic_id_fkey"
            columns: ["classic_id"]
            referencedRelation: "all_classics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classic_comments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      classic_likes: {
        Row: {
          classic_id: number
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          classic_id: number
          created_at?: string
          id?: never
          user_id: string
        }
        Update: {
          classic_id?: number
          created_at?: string
          id?: never
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "classic_likes_classic_id_fkey"
            columns: ["classic_id"]
            referencedRelation: "all_classics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classic_likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      messages: {
        Row: {
          id: number
          inserted_at: string
          text: string | null
          user_id: string
        }
        Insert: {
          id?: number
          inserted_at?: string
          text?: string | null
          user_id: string
        }
        Update: {
          id?: number
          inserted_at?: string
          text?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          description: string | null
          full_name: string | null
          id: string
          nickname: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          description?: string | null
          full_name?: string | null
          id: string
          nickname?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          description?: string | null
          full_name?: string | null
          id?: string
          nickname?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      test_categories: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      test_comments: {
        Row: {
          content: string
          created_at: string
          id: number
          nickname: string
          post_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: never
          nickname: string
          post_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: never
          nickname?: string
          post_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "test_comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "test_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "test_comments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      test_posts: {
        Row: {
          category_name: string
          comment_count: number
          content: string
          created_at: string
          id: string
          nickname: string
          title: string
          updated_at: string
          user_id: string
          view_count: number
        }
        Insert: {
          category_name: string
          comment_count?: number
          content: string
          created_at?: string
          id: string
          nickname: string
          title: string
          updated_at?: string
          user_id: string
          view_count?: number
        }
        Update: {
          category_name?: string
          comment_count?: number
          content?: string
          created_at?: string
          id?: string
          nickname?: string
          title?: string
          updated_at?: string
          user_id?: string
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "test_posts_category_name_fkey"
            columns: ["category_name"]
            referencedRelation: "test_categories"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "test_posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
