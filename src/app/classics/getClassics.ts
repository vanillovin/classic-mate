import supabase from '@/lib/supabase/client';

export async function getClassics(from: number = 0, to: number = 15): Promise<Classic[] | null> {
  const { data } = await supabase
    .from("all_classics")
    .select('*', { count: 'exact' })
    .range(from, to);
  return data ?? null;
}