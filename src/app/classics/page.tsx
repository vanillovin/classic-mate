import ClassicsContainer from './ClassicsContainer';
import { createServerClient } from '@/utils/supabase-server';

export default async function ClassicsPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: classics } = await supabase.from('all_classics').select();
  const { data: likes } = await supabase.from('classic_likes').select().eq('user_id', user?.id);
  
  return <ClassicsContainer classics={classics ?? []} likes={likes ?? []} />;
}
