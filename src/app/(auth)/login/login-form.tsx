'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/providers/supabase-provider';

export default function LoginForm() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsLoading(false);
    
    if (!error) {
      router.back();
      return toast.success('로그인 완료!');
    } else {
      return toast.error('뭔가 잘못됐어요! ' + error?.message);
    }
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="w-full flex flex-col"
    >
      <input 
        type="email"
        name="email" 
        placeholder="이메일"
        className="bg-white shadow-md bg-opacity-70 py-1 px-2 rounded-sm mb-2 placeholder:text-sm"
        autoFocus
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        className="bg-white shadow-md bg-opacity-70 py-1 px-2 rounded-sm mb-2 placeholder:text-sm"
        minLength={6}
        maxLength={12}
        required
      />
      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center p-2 font-medium text-sm rounded-sm hover:opacity-70 transition-all text-white bg-warm-vintage-burnt-orange shadow-md"
      >
        이메일로 로그인
        {isLoading && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 animate-spin ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
          </svg>
        )}
      </button>
    </form>
  )
}