import Link from 'next/link';
import type { Metadata } from 'next';

import Posts from './Posts';
import { siteConfig } from '@/config/site';
import { createServerClient } from '@/utils/supabase-server';

export const metadata: Metadata = siteConfig.metaData['community'];

// export const revalidate = 60;

export default async function CommunityPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: posts } = await supabase
    .from('test_posts')
    .select('*')
    .order('created_at', { ascending: false })
    // .eq('category_name', props.searchParams?.cat)
    .range(0, 20);

  if (!posts) return <p>No posts found.</p>;

  return (
    <section className='px-3 sm:px-6 pt-3 sm:pt-6 pb-24'>
      <div aria-label='제목' className='shadow-sm rounded-sm p-4 bg-gradient-radial from-peachmoon-beige to-white'>
        <h1 className='font-semibold text-2xl'>자유 게시판</h1>
        <p className=''>일상과 클래식 관련 주제로 자유롭게 소통하는 공간 ᐛ</p>
      </div>

      <div className='flex flex-col mt-9'>
        <div className='flex gap-x-2 pb-4 items-center justify-between p-1'>
          <div className='flex items-center'>
            <p className='font-semibold'>카테고리</p>
          </div>
          {user && (
            <Link
              href="/community/new"
              className="px-2 py-1 text-white rounded-sm bg-peachmoon-moca"
            >
              글쓰기
            </Link>
          )}
        </div>

        <Posts serverPosts={posts ?? []} />
      </div>
    </section>
  );
}