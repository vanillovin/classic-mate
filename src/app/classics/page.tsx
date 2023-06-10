import ClassicsContainer from '@/components/classics/ClassicsContainer';
import supabase from '@/lib/supabase/client';

async function getClassics(id: string) {
  return await supabase.from('allClassics').select();
}

type ExtractObjectType<T> = T extends Array<infer U> ? U : never;
export type ClassicsResponse = Awaited<ReturnType<typeof getClassics>>;
export type ClassicsResponseSuccess = ClassicsResponse['data'];
export type ClassicsResponseError = ClassicsResponse['error'];
export type ClassicResponseType = ExtractObjectType<ClassicsResponseSuccess>;

export default async function ClassicsPage() {
  const { data } = await supabase.from('allClassics').select();

  return (
    <div>
      <ClassicsContainer classics={data} />
    </div>
  )
}