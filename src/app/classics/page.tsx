import { createServerClient } from '@/utils/supabase-server';
import ClassicsContainer from '@/components/classics/ClassicsContainer';

export default async function ClassicsPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: classics } = await supabase.from('all_classics').select();
  const { data: likes } = await supabase.from('classic_likes').select().eq('user_id', user?.id);
  
  return (
    <div>
      <ClassicsContainer classics={classics ?? []} likes={likes ?? []} />
    </div>
  )
}