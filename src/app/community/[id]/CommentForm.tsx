'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { useSupabase } from '@/components/providers/supabase-provider';
import { useQueryClient } from '@tanstack/react-query';

function CommentForm({ postId }: { postId: string }) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState('');
  const { supabase, session } = useSupabase();

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
      className="flex border border-pantone-powder focus-within:border-pantone-latte"
    >
      <input
        value={content}
        onChange={e => setContent(e.target.value)}
        className="flex-1 p-1 focus:outline-none"
        required
      />
      <button
        type="submit"
        disabled={isDisabled}
        className={`w-16 sm:w-20 text-sm sm:text-base p-1 bg-pantone-powder 
          ${isDisabled ? '' : 'hover:bg-pantone-latte'}
        `}
      >
        댓글 쓰기
      </button>
    </form>
  );
}

export default CommentForm;