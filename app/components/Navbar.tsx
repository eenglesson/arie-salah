'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; // usePathname for client-side routing
import Button from './Button';
import Image from 'next/image';
import { useState } from 'react';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 800, // Controls the stiffness of the spring
      damping: 80,
      delay: 0,
    },
  },
};

type NavLink = {
  label: string;
  path: string;
};

const links: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const pathname = usePathname();

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
    setHasClicked(true); // När användaren klickar aktiveras animationerna
  };

  return (
    <>
      <nav className='flex sm:hidden items-center justify-between h-[80px] w-full px-[16px]'>
        <div className='rounded-full'>
          <div className='rounded-full overflow-hidden w-[64px] h-[64px] relative'>
            <Image
              src='/assets/legal1.png'
              alt='Legal image'
              fill
              objectFit='contain'
              objectPosition='center'
              className='z-10'
            />
          </div>
        </div>
        <button className='relative inline-block z-40 bg-none cursor-default'>
          <aside
            className='flex flex-col justify-center gap-[6px] cursor-pointer w-[28px] h-[22px]'
            onClick={toggleHamburger}
          >
            {/* First Line */}
            <span
              className={`w-full h-[2px] bg-white rounded-full ${
                hasClicked
                  ? isOpen
                    ? 'animate-line1Open'
                    : 'animate-line1Close'
                  : ''
              }`}
            ></span>

            {/* Second Line */}
            <span
              className={`w-full h-[2px] bg-white rounded-full ${
                hasClicked
                  ? isOpen
                    ? 'animate-line2Open'
                    : 'animate-line2Close'
                  : ''
              }`}
            ></span>
          </aside>
        </button>
        <ul
          className={`absolute left-0 top-80 w-full flex flex-col pb-[50px] pt-[100px] pl-[32px] gap-6 bg-black/40 rounded-b-3xl transition-all duration-[500ms] ease-in-out ${
            isOpen ? 'top-0' : 'top-[-100%]'
          }`}
          style={{
            top: isOpen ? '0' : '-100%',
          }}
        >
          {links.map((link, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              className='z-50'
            >
              <Button to={link.path} link linkBlack={pathname === link.path}>
                <p className='text-bodyDefault'> {link.label}</p>
              </Button>
            </motion.li>
          ))}
        </ul>
      </nav>

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
              <Button to={link.path} link linkBlack={pathname === link.path}>
                <p className='text-bodyDefault '> {link.label}</p>
              </Button>
            </li>
          ))}
        </ul>
        <Button to='/contact'>Hire Us</Button>
      </nav>
    </>
  );
}
