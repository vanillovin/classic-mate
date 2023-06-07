import MainNavigation from './MainNavigation';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className='w-full max-w-6xl mx-auto h-full'>
      <MainNavigation />
      <main className='pt-20'>{children}</main>
    </div>
  );
}

export default Layout;
