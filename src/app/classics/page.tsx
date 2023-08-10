import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import ClassicsContainer from './ClassicsContainer';
import { createServerClient } from '@/utils/supabase-server';

export const metadata: Metadata = siteConfig.metaData['classics'];

export default async function ClassicsPage() {
  const supabase = createServerClient();
  const { data: classics } = await supabase.from('all_classics').select();
  
  return (
    <div className='px-3 sm:px-6 pt-3 sm:pt-6 pb-24'>
      <ClassicsContainer classics={classics ?? []} />
    </div>
  );
}
