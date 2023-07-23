'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import SignOutButton from '../SignOutButton';
import { useSupabase } from '../providers/supabase-provider';

function MainNavigation() {
  const pathname = usePathname();
  const { supabase, session } = useSupabase();
  const [scrollY, setScrollY] = useState(0);
  const [nickname, setNickname] = useState('클메');

  useEffect(() => {
    async function fetchProfile() {
      const { data } = await supabase
        .from('profiles')
        .select()
        .eq('id', session?.user.id);
      if (data) setNickname(data[0].nickname)
    }
    
    fetchProfile();
  }, [supabase, session]);

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
    <header
      className={`w-full max-w-6xl sticky top-0 z-20 flex items-center justify-between px-4 h-12 sm:h-16 shadow-sm select-none bg-white
        ${isScrolled ? 'bg-opacity-95 backdrop-blur-sm transition-all shadow-md' : 'bg-opacity-70'}
      `}
    >
      <Link
        href='/'
        className='text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-pantone-california-gold to-pantone-metallic-gold animate-fade-in'
      >
        {siteConfig.name}
        <span className='text-xs ml-1 hidden sm:inline'>당신의 클래식 메이트</span>
      </Link>
      <div className="sm:hidden dropdown dropdown-end">
        <label tabIndex={0} className="group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pantone-pale-gold">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu dropdown-content z-10 p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          {session &&
            <li>
              <Link
                href={`/profile/${session.user.id}`}
                className='font-semibold rounded-bl-none rounded-br-none bg-pantone-powder'
              >
                {nickname}님
              </Link>
            </li>
          }
          {
            siteConfig.mainNav.slice(1, siteConfig.mainNav.length).map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.href}
                  className={`hover:bg-pantone-babys-breath rounded-none
                    ${pathname === nav.href && 'bg-pantone-babys-breath'}
                  `}>
                  {nav.title}
                </Link>
              </li> 
            ))
          }
          {!session ? (
            <li>
              <Link href={'/login'} className='font-semibold rounded-tl-none rounded-tr-none bg-pantone-sun-kiss'>
                로그인·회원가입
              </Link>
            </li>
          ) : (
            <li>
              <SignOutButton className='font-semibold rounded-tl-none rounded-tr-none text-vintage-holiday-red bg-warm-vintage-off-white'>  
                로그아웃
              </SignOutButton>
            </li>
          )}
        </ul>
      </div>
      <nav className='hidden sm:flex items-center font-medium text-sm sm:text-base gap-x-3'>
        {
          siteConfig.mainNav.slice(1, siteConfig.mainNav.length).map((nav, index) => (
            <Link 
              key={index}
              href={nav.href}
              className={`transition-all
                ${pathname === nav.href
                  ? 'text-vintage-holiday-brown'
                  : 'text-pantone-metallic-gold hover:text-vintage-holiday-brown'}
              `}
            >
              {nav.title}
            </Link>
          ))
        }
        {session ? (
          <div className='flex items-center rounded-sm h-7'>
            <Link
              data-tip="프로필"
              href={`/profile/${session.user.id}`}
              className='tooltip tooltip-bottom border-r transition-all px-1 h-full flex items-center justify-center bg-pantone-powder hover:bg-pantone-champagne border-pantone-champagne'
            >
              {nickname}님
            </Link>
            <SignOutButton className='tooltip tooltip-bottom px-1 h-full bg-pantone-powder hover:bg-pantone-champagne'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </SignOutButton>
          </div>
        ) : (
          <Link
            href='/login'
            className='bg-pantone-california-gold bg-opacity-50 text-xs sm:text-sm text-white rounded-sm flex items-center px-1 hover:bg-opacity-70 transition-all'
          >
            로그인·회원가입
          </Link>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
