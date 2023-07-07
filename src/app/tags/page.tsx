import React from 'react';
import { createServerClient } from '@/utils/supabase-server';

import TagsContainer from './TagsContainer';

type Props = {
  params?: { num?: string; };
  searchParams?: { tag1?: string, tag2?: string, tag3?: string };
};

export default async function TagsPage(props: Props) {
  const supabase = createServerClient();
  const selectedTags = [
    decodeURIComponent(props?.searchParams?.tag1 ?? ''),
    decodeURIComponent(props?.searchParams?.tag2 ?? ''),
    decodeURIComponent(props?.searchParams?.tag3 ?? '')
  ];
  
  const { data } = await supabase.from('all_classics').select();
  
  return (
    <div className='p-3 sm:p-6'>
      <TagsContainer classics={data ?? []} selectedTags={selectedTags} />
    </div>
  );
}