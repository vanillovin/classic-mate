import Link from 'next/link';
import { redirect } from 'next/navigation';

import LoginForm from './login-form';
import { createServerClient } from '@/utils/supabase-server';

export default async function LoginPage() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (session?.user) redirect('/');

  return (
    <div className='w-full flex flex-col items-center justify-center h-screen -mt-20 p-4 sm:p-0'>
      <div
        className='mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:max-w-[350px]'
      >
        <h1 className='text-2xl font-semibold'>로그인</h1>
        <LoginForm />
        <Link href='/register' className='text-sm underline underline-offset-4 text-pantone-brandy-sniffer'>
          계정이 없으신가요? 가입하기
        </Link>
      </div>
    </div>
  )
}
