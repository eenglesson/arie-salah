'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // usePathname for client-side routing
import Button from './Button';
import Image from 'next/image';

interface NavLink {
  label: string;
  path: string;
}

const links: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
];

export default function NavBar() {
  const pathname = usePathname(); // usePathname for client-side routing

  return (
    <nav className='hidden sm:flex justify-between items-center'>
      <div className='rounded-full'>
        <div className='rounded-full overflow-hidden w-[64px] h-[64px] relative'>
          <Image
            src='/assets/legal1.png'
            alt='Legal image'
            fill
            objectFit='contain'
            objectPosition='center'
          />
        </div>
      </div>
      <ul className='flex gap-8'>
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <p
                className={`hover:text-grey20 text-white text-bodyDefault ${
                  pathname === link.path ? 'text-secondaryGreen' : ''
                }`}
              >
                {link.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Button to='/contact'>Hire Us</Button>
    </nav>
  );
}
