'use client'

import { useAuth } from '@/components/AuthProvider';
import supabase from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function LoginForm() {
  const router = useRouter();

  const { user } = useAuth();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log(data, error)
    router.push('/');
  };

  useEffect(() => { 
    if (user) router.push('/');
  }, [user, router]);

  return (
    <form
      onSubmit={handleSignIn}
      className='w-full flex flex-col'
    >
      <input 
        type='email'
        name="email" 
        placeholder='name@example.com'
        className='bg-white bg-opacity-70 py-1 px-2 rounded-sm mb-2 placeholder:text-sm'
        autoFocus
        required
      />
      <input
        type="password"
        placeholder='비밀번호'
        name="password"
        className='bg-white bg-opacity-70 py-1 px-2 rounded-sm mb-2 placeholder:text-sm'
        required
      />
      <button
        type='submit'
        className='bg-yellow-700 bg-opacity-50 p-2 font-medium text-sm rounded-sm hover:opacity-70 transition-all'
      >
        이메일로 로그인
      </button>
    </form>
  )
}