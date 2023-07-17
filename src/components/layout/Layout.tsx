import { PropsWithChildren } from 'react';

import MainNavigation from './MainNavigation';
import Footer from './Footer';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className='w-full max-w-6xl mx-auto min-h-screen h-full'>
      <MainNavigation />
      <main className='py-2 sm:py-4'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
