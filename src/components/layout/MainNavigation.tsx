import Link from 'next/link';

function MainNavigation() {
  return (
    <header className='flex items-center justify-between bg-yellow-200 p-2'>
      <div>Classics!</div>
      <nav>
        <ul className='flex'>
          <li className='mr-2'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mr-2'>
            <Link href='/classics'>All Classics</Link>
          </li>
          <li className=''>
            <Link href='/new-classic'>Add New Classic</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
