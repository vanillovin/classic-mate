'use client';

import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

import { useSupabase } from '@/components/providers/supabase-provider';

const initialInputs = { nickname: '', content: '' };

function CommentForm({ classicId }: { classicId: string }) {
  const queryClient = useQueryClient();
  const { supabase, session } = useSupabase();

  const [inputs, setInputs] = useState(initialInputs);
  const { nickname, content } = inputs;

  const isButtonDisabled = nickname.trim().length < 1 || content.replace(/\s/g, '').length < 1;

  function handleChangeInputs(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  }

  function clearInputs() {
    setInputs(initialInputs);
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
        nickname,
        content,
        user_id: session.user.id,
        classic_id: classicId,
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
        onChange={handleChangeInputs}
        minLength={4}
        required
        className="w-5/6 rounded-sm p-1 flex-1 focus:outline-none shadow-sm"
      />
      <button
        type='submit'
        disabled={isButtonDisabled}
        className={`font-medium bg-yellow-600 bg-opacity-50 rounded-sm px-2 py-1 text-white  shadow-sm
          ${!isButtonDisabled && 'hover:bg-opacity-80 transition-all'}
        `}
      >
        댓글 달기
      </button>
    </form>
  );
}

export default CommentForm;