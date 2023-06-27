import { PropsWithChildren } from 'react';

import MainNavigation from './MainNavigation';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className='w-full max-w-6xl mx-auto h-full'>
      <MainNavigation />
      <main className='pt-14 sm:pt-20'>{children}</main>
    </div>
  );
}

export default Layout;
