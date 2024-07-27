'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-16 flex items-center gap-1'>
        <Link
          href='/'
          className={clsx([
            'rounded-md px-3 py-2 text-sm font-medium transition',
            pathname === '/' && 'bg-gray-900 text-white',
          ])}
        >
          Home
        </Link>

        <Link
          href='/about'
          className={clsx({
            'rounded-md px-3 py-2 text-sm font-medium transition': true,
            'bg-gray-900 text-white': pathname === '/about',
          })}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
