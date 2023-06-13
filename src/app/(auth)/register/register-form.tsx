'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSupabase } from '@/components/providers/supabase-provider';
import { toast } from 'react-toastify';
export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { supabase } = useSupabase();
  const router = useRouter();
  const redirectUrl = '/';

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        void router.push(redirectUrl);
      }
    };

    void checkSession();
  }, [supabase.auth, router])

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setIsLoading(false);
    // console.log('signup', data, error);
    if (!error) {
      return toast.success('로그인 링크를 보냈습니다. 이메일을 확인해 주세요!');
    }
    return toast.error(error?.message);
  };

  return (
    <form
      onSubmit={handleSignUp}
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
        disabled={isLoading}
        className='flex items-center justify-center bg-yellow-700 bg-opacity-50 p-2 font-medium text-sm rounded-sm hover:opacity-70 transition-all'
      >
        이메일로 가입
        {isLoading && 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 animate-spin ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
          </svg>}
      </button>
    </form>
  )
}