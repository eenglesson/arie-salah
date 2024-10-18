import React from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className='flex justify-between items-center w-full gap-10'>
      {/* Text section on the left */}
      <aside className='flex flex-col w-[80%] gap-14'>
        <div>
          <h1 className='text-h1 font-playfair md:text-display xl:text-[96px] text-white'>
            The Law Is The Public Conscience
          </h1>
          <p className='text-grey20 text-bodySmall sm:text-bodyDefault max-w-[70%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            placeat quis tempora accusantium porro veniam dicta beatae facilis
            voluptatum consectetur ipsam tempore, distinctio nesciunt?
          </p>
        </div>
        <div className='flex gap-12 h-fit items-center'>
          <Button yellow bigButton arrow>
            Practicing Area
          </Button>
          <Link href='/contact'>
            <p className='text-white font-normal hover:underline'>
              Book an appointment
            </p>
          </Link>
        </div>
      </aside>
    </header>
  );
}
