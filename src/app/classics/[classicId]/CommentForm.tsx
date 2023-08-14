'use client';

import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

import { useAuth } from '@/components/providers/auth-provider';
import { useSupabase } from '@/components/providers/supabase-provider';

function CommentForm({ classicId }: { classicId: string }) {
  const queryClient = useQueryClient();
  const { profile } = useAuth();
  const { supabase, session } = useSupabase();

  const [content, setContent] = useState('');
  
  const isButtonDisabled = content.replace(/\s/g, '').length < 3;

  function clearInputs() {
    setContent('');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!session) {
      toast.error('로그인 후 이용 가능합니다');
      return;
    }
    const { error } = await supabase
      .from('classic_comments')
      .insert({
        content,
        user_id: session.user.id,
        classic_id: classicId,
        nickname: profile?.nickname ?? '클메',
      });
    if (!error) {
      clearInputs();
      queryClient.invalidateQueries(["classicComments", classicId]);
    } else {
      toast.error(`댓글을 작성하지 못했습니다.`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-1'>
      <input
        name="content"
        placeholder=""
        value={content}
        onChange={e => setContent(e.target.value)}
        minLength={4}
        required
        className="w-5/6 rounded-sm p-1 flex-1 focus:outline-none"
      />
      <button
        type='submit'
        disabled={isButtonDisabled}
        className={`font-medium bg-opacity-70 rounded-sm px-2 py-1 text-white bg-pantone-california-gold
          ${!isButtonDisabled && 'hover:bg-opacity-100 transition-all'}
        `}
      >
        댓글 달기
      </button>
    </form>
  );
}

export default CommentForm;