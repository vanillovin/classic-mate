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
      allClassics: {
        Row: {
          composer: string
          cover_image: string
          description: string
          genre: string
          id: string
          liked_users: string[] | null
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
          id?: string
          liked_users?: string[] | null
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
          id?: string
          liked_users?: string[] | null
          tags?: string[]
          title?: string
          video_url?: string
          year?: number
        }
        Relationships: []
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
