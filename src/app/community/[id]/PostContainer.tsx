'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import supabase from '@/lib/supabase/client';
import DaisyModal from '@/components/DaisyModal';
import { useSupabase } from '@/components/providers/supabase-provider';

async function fetchPostData(id: string): Promise<Post | null> {
  const { data } = await supabase
    .from('test_posts')
    .select('*')
    .match({ id })
    .single();
  return data;
}

function PostContainer({ id, serverPost }: { id: string; serverPost: Post; }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { supabase, session } = useSupabase();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { data: post, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostData(id),
    initialData: serverPost,
    suspense: true,
  });

  if (!post || isError) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        앗, 게시글을 불러오지 못했습니다.
      </div>
    );
  }
   
  function showDeletePostModal() {
    modalRef.current?.showModal();
  }

  async function deletePost() {
    const { error } = await supabase
      .from('test_posts')
      .delete()
      .eq('id', '7bf9f8c6-6497-4786-b526-4601ea5c5829');
    if (!error) {
      router.push('/community');
      queryClient.invalidateQueries(['posts']);
    } else {
      toast.error(`삭제하는 동안 문제가 발생했습니다. 나중에 다시 시도해 주세요! ${error.message}`)
    }
  }
  
  return (
    <>
      <DaisyModal
        ref={modalRef}
        title='정말 게시글을 삭제하실 건가요?'
        content='ESC 키를 누르거나 아래 버튼을 클릭하세요!'
        onClick={deletePost}
      />
      <header className='flex flex-col gap-y-1'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href={`/community?cat=${post.category_name}`}
              className='px-1 rounded-sm mr-1 bg-pantone-powder'
            >
              {post.category_name}
            </Link>
            <h2 className='font-semibold text-lg sm:text-xl'>{post.title}</h2>
          </div>
          {session?.user.id === post.user_id && (
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-peachmoon-rose">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] p-1 text-sm shadow bg-base-100 rounded-sm w-24 transition-all'
              >
                <li className='w-full flex items-center justify-center p-1 transition-all hover:bg-whitemoon-lightgray'>
                  <Link href={`/community/${id}/edit`} className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <span className='ml-1'>수정하기</span>
                  </Link>
                </li>
                <li className='w-full flex items-center justify-center p-1 transition-all hover:bg-whitemoon-lightgray'>
                  <button className='flex items-center' onClick={showDeletePostModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    <span className='ml-1'>삭제하기</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className='flex items-center text-xs sm:text-sm overflow-y-scroll scrollbar'>
          <Link href={`/profile/${post.user_id}`} className="font-medium hover:underline">
            {post.nickname}
          </Link>
          <span className='mx-1'>·</span>
          <time dateTime={post.created_at}>
            {new Date(post.created_at).toLocaleString()}
          </time>
          {post.created_at !== post.updated_at && (
            <p className='mx-1'>· <span className='text-peachmoon-rose'>수정됨</span></p>
          )}
        </div>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className='border-t my-1 p-2 whitespace-pre-wrap text-sm sm:text-base flex-1 overflow-y-scroll scrollbar mt-2 bg-white'
      />
    </>
  );
}

export default PostContainer;