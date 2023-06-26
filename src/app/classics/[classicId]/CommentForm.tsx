'use client';

import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { useAuth } from '@/components/providers/auth-provider';
import { useSupabase } from '@/components/providers/supabase-provider';
import { useQueryClient } from '@tanstack/react-query';

const initialInputs = { nickname: '', content: '' };

function CommentForm({ classicId }: { classicId: string }) {
  const { user } = useAuth();
  const { supabase } = useSupabase();
  const queryClient = useQueryClient();

  const [inputs, setInputs] = useState(initialInputs);
  const { nickname, content } = inputs;

  function handleChangeInputs(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  }

  function clearInputs() {
    setInputs(initialInputs);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) toast.error('로그인 후 이용 가능합니다');
    const { error } = await supabase
      .from('classic_comments')
      .insert({
        nickname,
        content,
        user_id: user?.id,
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
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <div className='flex gap-2'>
        <input
          name="nickname"
          placeholder="이름"
          value={nickname}
          onChange={handleChangeInputs}
          className="rounded-sm p-1"
          required
        />
        {/* <input type="password" name="password" placeholder="비밀번호" className="rounded-sm" required /> */}
      </div>
      <textarea
        name="content"
        placeholder="내용"
        value={content}
        onChange={handleChangeInputs}
        minLength={4}
        className="rounded-sm my-2 p-1 min-h-20 max-h-40 "
        required
      />
      <button
        type='submit'
        className='font-medium bg-yellow-600 bg-opacity-60 rounded-sm p-1 text-white hover:bg-opacity-80 transition-all'
      >
        댓글 달기
      </button>
    </form>
  )
}

export default CommentForm