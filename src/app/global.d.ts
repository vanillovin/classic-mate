import type { Database as DB } from '@/lib/supabase/database.types';

declare global {
  type Database = DB;
  type Message = DB['public']['Tables']['messages']['Row'];
  type Classic = DB['public']['Tables']['all_classics']['Row'];
  type ClassicLike = DB['public']['Tables']['classic_likes']['Row'];
  type ClassicComment = DB['public']['Tables']['classic_comments']['Row'];
  type Profile = DB['public']['Tables']['profiles']['Row'];
  type Post = DB['public']['Tables']['test_posts']['Row'];
  type PostComment = DB['public']['Tables']['test_comments']['Row'];
}