import React from 'react'
import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';

export default async function NewTodo() {
  const addTodo = async (formData: FormData) => {
    'use server';

    // get task from input
    const task = String(formData.get('task'));
  
    // write a new todo to supabase
    const supabase = createServerActionClient<Database>({ cookies });
    await supabase.from('todos').insert({ task });
    
    // fetch fresh data
    revalidatePath('/');
  }

  return (
    <form action={addTodo}>
      <input 
        name="task" 
        placeholder='Write a todo task and click Enter' 
        className='border-b-2 bg-transparent border-black p-1 w-96 bg-gray-600 text-white'
      />
    </form>
  );
}
