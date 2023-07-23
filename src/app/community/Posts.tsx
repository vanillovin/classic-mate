'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

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
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1'>
        {posts?.map((post) => (
          <li
            key={post.id}
            className='px-2 py-3 transition-all bg-opacity-90 border-t border-b border-whitemoon-darkblue hover:bg-white'
          >
            <Link
              href={`/community/${post.id}`}
              className='flex items-center justify-between'
            >
              <div className='font-medium'>
                <p className='w-fit px-1 rounded-sm text-sm text-center bg-peachmoon-peach'>
                  {post.category_name}
                </p>
                <p className='font-medium'>{post.title}</p>
              </div>
              <div className='text-sm text-end'>
                <p>{post.nickname}</p>
                <p className='text-whitemoon-darkgray'>{post.created_at.split('T')[0]}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className='flex items-center justify-center my-4'>
        <nav className='inline-flex gap-x-2 font-medium'>
          <button className="px-2 sm:px-4 hover:text-peachmoon-rose">1</button>
          <button className="px-2 sm:px-4 hover:text-peachmoon-rose">2</button>
          <button className="px-2 sm:px-4 hover:text-peachmoon-rose">3</button>
          <button className="px-2 sm:px-4 hover:text-peachmoon-rose">4</button>
          <button className="px-2 sm:px-4 hover:text-peachmoon-rose">5</button>
          {/* <button className="px-2 sm:px-4 hover:text-peachmoon-rose">...</button>
          <button className="px-2 sm:px-4 hover:text-peachmoon-rose">100</button> */}
        </nav>
      </div>
    </div>
  );
}

export default Posts;