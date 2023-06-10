import createServerClient from '@/lib/supabase/supabase-server';
import ClassicsContainer from '@/components/classics/ClassicsContainer';

export default async function ClassicsPage() {
  const supabase = createServerClient();
  const { data } = await supabase.from('allClassics').select();
  return (
    <div>
      <ClassicsContainer classics={data} />
    </div>
  )
}
