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
          composer: string | null
          coverImage: string | null
          description: string | null
          genre: string | null
          id: string
          tags: string[]
          title: string | null
          videoUrl: string | null
          year: string | null
        }
        Insert: {
          composer?: string | null
          coverImage?: string | null
          description?: string | null
          genre?: string | null
          id?: string
          tags: string[]
          title?: string | null
          videoUrl?: string | null
          year?: string | null
        }
        Update: {
          composer?: string | null
          coverImage?: string | null
          description?: string | null
          genre?: string | null
          id?: string
          tags?: string[]
          title?: string | null
          videoUrl?: string | null
          year?: string | null
        }
        Relationships: []
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
