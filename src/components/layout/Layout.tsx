import { PropsWithChildren } from 'react';

import MainNavigation from './MainNavigation';
import Footer from './Footer';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className='w-full max-w-6xl mx-auto h-full'>
      <MainNavigation />
      <main className='py-14 sm:py-20'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
