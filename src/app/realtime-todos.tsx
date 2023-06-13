'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Todo from './todo';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RealtimeTodos({ todos }: { todos: Todo[] }) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  useEffect(() => { 
    const channel = supabase
      .channel('realtime todos')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'todos'
        },
        () => {
          router.refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    }
  }, [supabase, router])

  return (
    <div className=''>
      <h2 className='text-lg font-semibold'>RealtimeTodos</h2>
      <ul className='p-1 border border-black'>
        {todos?.map((todo: Todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}
