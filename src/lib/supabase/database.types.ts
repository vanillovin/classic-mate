export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
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
          user_id: string
        }
        Insert: {
          classic_id: number
          content: string
          created_at?: string
          id?: never
          nickname: string
          user_id: string
        }
        Update: {
          classic_id?: number
          content?: string
          created_at?: string
          id?: never
          nickname?: string
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
      profiles: {
        Row: {
          avatar_url: string | null
          description: string | null
          full_name: string | null
          id: string
          liked_classic: Json[] | null
          nickname: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          description?: string | null
          full_name?: string | null
          id: string
          liked_classic?: Json[] | null
          nickname?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          description?: string | null
          full_name?: string | null
          id?: string
          liked_classic?: Json[] | null
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
      todos: {
        Row: {
          id: number
          inserted_at: string
          is_complete: boolean | null
          task: string | null
          user_id: string
        }
        Insert: {
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
          user_id: string
        }
        Update: {
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey"
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
