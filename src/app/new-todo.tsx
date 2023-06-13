'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/providers/supabase-provider';
import { toast } from 'react-toastify';

export default function NewTodo() {
  const router = useRouter();
  const [task, setTask] = useState('');
  const { supabase } = useSupabase();

  const addTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data: { user } }  = await supabase.auth.getUser();
    const { error } = await supabase.from('todos').insert({ task, user_id: user?.id });
    if (error) toast.error('투두를 올리지 못했습니다');
  }

  return (
    <form onSubmit={addTodo}>
      <input 
        name="task"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder='Write a todo task and click Enter' 
        className='border-b-2 bg-transparent border-black p-1 w-96 bg-gray-600 text-white'
      />
    </form>
  );
}