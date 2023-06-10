import ClassicsContainer from '@/components/classics/ClassicsContainer';
import supabase from '@/lib/supabase/client';

export default async function ClassicsPage() {
  const { data } = await supabase.from('allClassics').select();
  console.log(data)
  return (
    <div>
      <ClassicsContainer classics={data} />
    </div>
  )
}
