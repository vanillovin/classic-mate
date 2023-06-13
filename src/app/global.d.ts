import type { Database as DB } from '@/lib/supabase/database.types';

declare global {
  type Database = DB;
  type Todo = DB['public']['Tables']['todos']['Row'];
}