'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import supabase from '@/lib/supabase/client';
import { formatTimestamp } from '@/utils/dateUtils';

type SortType = 'created_at' | 'comment_count' | 'view_count';

// https://j~.supabase.co/rest/v1/test_posts?
//  select =*& title=ilike.% ~ % 25 & order=created_at.desc
async function fetchPosts(sortType: SortType, keyword: string) { 
  const decodeKeword = decodeURIComponent(keyword);
  const { data } = await supabase
    .from('test_posts')
    .select('*')
    .ilike('title', `%${decodeKeword}%`)
    .order(sortType, { ascending: false })
    // .or(`content.ilike.%${decodeKeword}%`) x
    // .range(0, 20);
  return data;
}
  
function Posts({ serverPosts }: { serverPosts: Post[] }) {
  const searchParams = useSearchParams();
 
  const keyword = searchParams.get('keyword') ?? '';
  const sortType = (searchParams.get('sort') as SortType) ?? 'created_at';

  const { data: posts } = useQuery({
    queryKey: ['posts', sortType, keyword],
    queryFn: () => fetchPosts(sortType, keyword),
    // initialData: serverPosts,
    suspense: true,
  });

  return (
    <div>
      <div className='grid md:grid-cols-2 gap-0 sm:gap-2 md:gap-4 shadow-sm sm:shadow-none'>
        {posts?.map((post) => (
          <Link
            key={post.id}
            href={`/community/${post.id}`}
            className='shadow-sm relative group border-b last:border-b-0 sm:border-0 sm:last:border-b-0 border-[#EBE5E1]'
          >
            <div className='flex items-center justify-between px-3 py-3 sm:py-4 transition-all bg-[#BCC8D1] group-hover:bg-[#C2D7E8]'>
              <div className='text-sm sm:text-base font-medium space-y-1'>
                <p className='w-fit font-light text-xs sm:text-sm text-center border px-1 border-white text-white'>
                  {post.category_name}
                </p>
                <p className='font-medium'>{post.title}</p>
              </div>
              <div className='text-xs sm:text-sm text-end flex flex-col items-end space-y-1'>
                <div className='flex items-center space-x-1'>
                  <span>{post.nickname}</span>
                  <span>·</span>
                  <p className='text-whitemoon-darkgray'>
                    {formatTimestamp(post.created_at)}
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <p className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {post.view_count}
                  </p>
                  <p className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    {post.comment_count}
                  </p>
                </div>
              </div>
            </div>
            <div className='hidden sm:block absolute w-full h-full top-1 left-1 border border-black' />
          </Link>
        ))}
      </div>
      {/* <div className='flex items-center justify-center mt-8'>
        <nav className='inline-flex gap-x-2 font-medium'>
          <button className="px-2 sm:px-4 hover:text-[#]">1</button>
          <button className="px-2 sm:px-4 hover:text-[#]">2</button>
          <button className="px-2 sm:px-4 hover:text-[#]">3</button>
          <button className="px-2 sm:px-4 hover:text-[#]">4</button>
          <button className="px-2 sm:px-4 hover:text-[#]">5</button>
          <button className="px-2 sm:px-4">...</button>
          <button className="px-2 sm:px-4">100</button>
        </nav>
      </div> */}
    </div>
  );
}

export default Posts;