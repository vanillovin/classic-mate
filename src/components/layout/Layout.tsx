import MainNavigation from './MainNavigation';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className=''>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
