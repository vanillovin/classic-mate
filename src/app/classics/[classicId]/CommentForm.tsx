'use client';

import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { useSupabase } from '@/components/providers/supabase-provider';
import { useQueryClient } from '@tanstack/react-query';

const initialInputs = { nickname: '', content: '' };

function CommentForm({ classicId }: { classicId: string }) {
  const { supabase, session } = useSupabase();
  const queryClient = useQueryClient();

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
      toast.success('댓글 작성 완료');
      queryClient.invalidateQueries(["classicComments", classicId]);
    } else {
      toast.error(`댓글 작성 실패 ${error.message}`);    
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>
      <div className='w-full flex gap-1'>
        <input
          name="nickname"
          placeholder="이름"
          value={nickname}
          onChange={handleChangeInputs}
          maxLength={10}
          className="w-1/6 rounded-sm p-1"
          required
        />
        <input
          name="content"
          placeholder="내용"
          value={content}
          onChange={handleChangeInputs}
          minLength={4}
          className="w-5/6 rounded-sm p-1 "
          required
        />
      </div>
      <button
        type='submit'
        disabled={isButtonDisabled}
        className={`font-medium bg-yellow-600 bg-opacity-60 rounded-sm p-1 text-white 
          ${!isButtonDisabled && 'hover:bg-opacity-80 transition-all'}
        `}
      >
        댓글 달기
      </button>
    </form>
  )
}

export default CommentForm