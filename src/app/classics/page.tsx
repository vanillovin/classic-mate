import ClassicsContainer from '@/components/classics/ClassicsContainer';
import supabase from '@/lib/supabase/client';
import { ClassicT } from './types';

export default async function ClassicsPage() {
  const { data } = await supabase.from('allClassics').select();
  return (
    <div>
      <ClassicsContainer classics={data as ClassicT[]} />
    </div>
  )
}
