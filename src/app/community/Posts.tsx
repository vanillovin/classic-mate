'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { formatTimestamp } from '@/utils/dateUtils';
import { useSupabase } from '@/components/providers/supabase-provider';

function Posts({ serverPosts }: { serverPosts: Post[]}) {
  const { supabase } = useSupabase();
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => { 
      const { data } = await supabase
        .from('test_posts')
        .select()
        .order('created_at', { ascending: false })
        .range(0, 20);
      return data;
    },
    initialData: serverPosts,
    suspense: true,
  });

  return (
    <div>
      <div className='grid md:grid-cols-2 gap-2 sm:gap-4'>
        {posts?.map((post) => (
          <Link
            key={post.id}
            href={`/community/${post.id}`}
            className='relative group'
          >
            <div className='flex items-center justify-between px-3 py-3 sm:py-4 transition-all bg-[#BCC8D1] group-hover:bg-[#C2D7E8]'>
              <div className='text-sm sm:text-base font-medium'>
                <p className='w-fit font-light rounded-sm text-xs sm:text-sm text-center underline underline-offset-4 text-white '>
                  {post.category_name}
                </p>
                <p className='font-medium'>{post.title}</p>
              </div>
              <div className='text-xs sm:text-sm text-end'>
                <p>{post.nickname}</p>
                <p className='text-whitemoon-darkgray'>
                  {formatTimestamp(post.created_at)}
                </p>
              </div>
            </div>
            <div className='w-full h-full absolute top-1 left-1 border border-black' />
          </Link>
        ))}
      </div>
      {/* <div className='flex items-center justify-center my-8'>
        <nav className='inline-flex gap-x-2 font-medium'>
          <button className="px-2 sm:px-4 hover:text-[#FFD78A]">1</button>
          <button className="px-2 sm:px-4 hover:text-[#FFD78A]">2</button>
          <button className="px-2 sm:px-4 hover:text-[#FFD78A]">3</button>
          <button className="px-2 sm:px-4 hover:text-[#FFD78A]">4</button>
          <button className="px-2 sm:px-4 hover:text-[#FFD78A]">5</button>
          <button className="px-2 sm:px-4 hover:text-peachmoon-rose">...</button>
          <button className="px-2 sm:px-4 hover:text-peachmoon-rose">100</button>
        </nav>
      </div> */}
    </div>
  );
}

export default Posts;