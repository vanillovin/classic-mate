'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import SignOutButton from '../SignOutButton';
import { useAuth } from '../providers/auth-provider';

function MainNavigation() {
  const { user } = useAuth();
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);

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
      className={`w-full max-w-6xl flex items-center justify-between bg-white px-3 sm:px-6 h-12 sm:h-16 fixed shadow-sm select-none z-50 
        ${isScrolled ? 'bg-opacity-100 transition-all shadow-md' : 'bg-opacity-70'}
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
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          {user &&
            <li>
              <Link
                href={`/profile/${user.id}`}
                className='font-semibold rounded-bl-none rounded-br-none bg-pantone-sun-kiss'
              >
                {user.email?.split('@')[0]}님
              </Link>
            </li>
          }
          {
            siteConfig.mainNav.slice(1, siteConfig.mainNav.length).map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.href}
                  className={`
                    ${index === 0 ? 'rounded-bl-none rounded-br-none' : 'rounded-none'}
                    ${pathname === nav.href && 'hover:bg-pantone-babys-breath bg-pantone-babys-breath'}
                  `}>
                  {nav.title}
                </Link>
              </li> 
            ))
          }
          {!user ? (
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
      <nav className='hidden sm:flex font-medium text-sm sm:text-base'>
        {
          siteConfig.mainNav.slice(1, siteConfig.mainNav.length).map((nav, index) => (
            <Link 
              key={index}
              href={nav.href}
              className={`mr-2 sm:mr-4 transition-all 
                ${pathname === nav.href ? 'text-vintage-holiday-brown' : 'text-pantone-metallic-gold hover:text-vintage-holiday-brown'}
              `}
            >
              {nav.title}
            </Link>
          ))
        }
        {user ? (
          <div className='flex items-center'>
            <Link href={`/profile/${user.id}`} className='text-vintage-holiday-brown hover:text-yellow-500 transition-all mr-2'>
              {user.email?.split('@')[0]}님
            </Link>
            <SignOutButton>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
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
