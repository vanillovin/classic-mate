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
          coverImage: string
          description: string
          genre: string
          id: string
          tags: string[]
          title: string
          videoUrl: string
          year: string
        }
        Insert: {
          composer?: string
          coverImage?: string
          description?: string
          genre?: string
          id?: string
          tags: string[]
          title?: string
          videoUrl?: string
          year?: string
        }
        Update: {
          composer?: string
          coverImage?: string
          description?: string
          genre?: string
          id?: string
          tags?: string[]
          title?: string
          videoUrl?: string
          year?: string
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
