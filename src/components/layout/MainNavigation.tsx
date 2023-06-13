'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useEffect, useState } from 'react';
import { useAuth } from '../providers/auth-provider';

function MainNavigation() {
  const [scrollY, setScrollY] = useState(0);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;

  return (
    <header className={`w-full max-w-6xl flex items-center justify-between bg-white px-3 sm:px-6 h-12 sm:h-16 fixed shadow-sm z-50 ${isScrolled ? 'bg-opacity-100 transition-all shadow-md' : 'bg-opacity-70'}`}>
      <Link
        href='/'
        className='text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 
          to-yellow-600 animate-fade-in'
      >
        {siteConfig.name}
        <span className='text-xs ml-1 hidden sm:inline'>당신의 클래식 메이트</span>
      </Link>
      <nav className='flex font-medium text-sm sm:text-base'>
        <Link href='/classics' className='mr-2 sm:mr-4 hover:text-yellow-500 transition-all'>
          모든 클래식
        </Link>
        <Link href='/tags' className='mr-2 sm:mr-4 hover:text-yellow-500 transition-all'>
          태그로 찾기
        </Link>
        {user ? (
          <div className='flex items-center'>
            <Link href={`/profile`} className='hover:text-yellow-500 transition-all mr-2'>
              {user.email?.split('@')[0]}님
            </Link>
            <button onClick={signOut}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-900 hover:opacity-70">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </button>
          </div>
        ) : (
          <Link
            href='/login'
            className='bg-yellow-400 bg-opacity-40 text-xs sm:text-sm text-white rounded-sm flex items-center px-1'
          >
            로그인·회원가입
          </Link>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
