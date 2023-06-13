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
          coverImage: string | null
          description: string | null
          genre: string
          id: string
          tags: string[]
          title: string
          videoUrl: string | null
          year: string
        }
        Insert: {
          composer: string
          coverImage?: string | null
          description?: string | null
          genre: string
          id?: string
          tags: string[]
          title: string
          videoUrl?: string | null
          year: string
        }
        Update: {
          composer?: string
          coverImage?: string | null
          description?: string | null
          genre?: string
          id?: string
          tags?: string[]
          title?: string
          videoUrl?: string | null
          year?: string
        }
        Relationships: []
      }
      classicPlaylists: {
        Row: {
          id: string
          musics: Json | null
          name: string
        }
        Insert: {
          id?: string
          musics?: Json | null
          name: string
        }
        Update: {
          id?: string
          musics?: Json | null
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
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
