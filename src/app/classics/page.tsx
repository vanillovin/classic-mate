import supabase from '@/lib/supabase/client';
import ClassicsContainer from '@/components/classics/ClassicsContainer';

export default async function ClassicsPage() {
  const { data } = await supabase.from('allClassics').select();

  return (
    <div>
      <ClassicsContainer classics={data ?? []} />
    </div>
  )
}