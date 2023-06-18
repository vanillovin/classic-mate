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
  
  const { data } = await supabase.from('allClassics').select();
  
  return (
    <div className='p-4'>
      <TagsContainer classics={data ?? []} selectedTags={selectedTags} />
    </div>
  );
}