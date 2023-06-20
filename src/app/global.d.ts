import type { Database as DB } from '@/lib/supabase/database.types';

declare global {
  type Database = DB;
  type Todo = DB['public']['Tables']['todos']['Row'];
  type Classic = DB['public']['Tables']['all_classics']['Row'];
  type ClassicLike = DB['public']['Tables']['classic_likes']['Row'];
  type Profile = DB['public']['Tables']['profiles']['Row'];
}