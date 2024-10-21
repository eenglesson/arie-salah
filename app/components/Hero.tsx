import React from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className='flex justify-between items-center w-full gap-10 py-20 sm:py-40'>
      {/* Text section on the left */}
      <aside className='flex flex-col gap-14'>
        <div className='sm:w-[90%]'>
          <h1 className='text-h1 font-playfair md:text-display text-white'>
            The Law Is The Public Conscience
          </h1>
          <p className='text-grey20 text-bodySmall sm:text-bodyDefault max-w-[70%]'>
            With Tailored Solutions and Expert Consultation, We Navigate Complex
            Legal Terrain Together, Ensuring Your Peace of Mind and Empowering
            Your Journey Toward Achieving Your Goals.
          </p>
        </div>
        <div className='flex gap-12 h-fit w-full items-center'>
          <Button link arrow>
            Practicing Area
          </Button>
          <Link href='/contact'>
            <p className='text-white font-light hover:underline'>
              Book an appointment
            </p>
          </Link>
        </div>
      </aside>
    </header>
  );
}
