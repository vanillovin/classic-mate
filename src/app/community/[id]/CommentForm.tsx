'use client';

import { toast } from 'react-toastify';
import React, { useState } from 'react';

import { useSupabase } from '@/components/providers/supabase-provider';
import { useQueryClient } from '@tanstack/react-query';

function CommentForm({ postId, commentCount }: { postId: string; commentCount: number; }) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState('');
  const { supabase, session } = useSupabase();

  async function increaseCommentCount(postId: string, commentCount: number) {
    await supabase
      .from('test_posts')
      .update({ comment_count: commentCount + 1 })
      .eq('id', postId);
  };
  
  async function handleAddComment() {
    if (!session) {
      toast.error('로그인 후 이용 가능합니다.');
      return;
    }
    const { data } = await supabase
      .from('profiles')
      .select('nickname')
      .eq('id', session.user.id);
    const nickname = data?.[0].nickname ?? '클메';
    const { error } = await supabase
      .from('test_comments')
      .insert({
        content,
        nickname,
        post_id: postId,
        user_id: session.user.id, 
      });
    if (!error) {
      setContent('');
      queryClient.invalidateQueries(['postComments', postId]);
      increaseCommentCount(postId, commentCount);
    } else {
      toast.error('댓글을 올리지 못했습니다.');
    }
  }

  const isDisabled = content.trim().length < 3;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddComment();
      }}
      className="flex items-center border border-pantone-powder focus-within:border-pantone-latte"
    >
      <input
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full flex-1 p-1 focus:outline-none"
        required
      />
      <button
        type="submit"
        disabled={isDisabled}
        className={`px-2 sm:px-1 h-full text-sm bg-pantone-powder 
          ${isDisabled ? '' : 'hover:bg-pantone-latte'}
        `}
      >
        <span className='hidden sm:block'>댓글 쓰기</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:hidden w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </form>
  );
}

export default CommentForm;