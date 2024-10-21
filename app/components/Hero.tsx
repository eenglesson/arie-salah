'use client';
import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeInAnimationVariantsRight } from '@/lib/framerMotion';

export default function Hero() {
  return (
    <header className='flex justify-between items-center w-full gap-10 py-20 sm:py-40'>
      {/* Text section on the left */}
      <aside className='flex flex-col gap-14'>
        <div className='sm:w-[90%]'>
          <motion.h1
            variants={fadeInAnimationVariantsRight}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='text-h1 font-playfair md:text-display text-white'
          >
            The Law Is The Public Conscience
          </motion.h1>
          <motion.p
            variants={fadeInAnimationVariantsRight}
            initial='initial'
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.1, // Delay for h1 element
                type: 'spring',
                stiffness: 60,
                damping: 20,
              },
            }}
            viewport={{ once: true }}
            className='text-grey20 text-bodySmall sm:text-bodyDefault max-w-[70%]'
          >
            With Tailored Solutions and Expert Consultation, We Navigate Complex
            Legal Terrain Together, Ensuring Your Peace of Mind and Empowering
            Your Journey Toward Achieving Your Goals.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInAnimationVariantsRight}
          initial='initial'
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              delay: 0.2, // Delay for h1 element
              type: 'spring',
              stiffness: 60,
              damping: 20,
            },
          }}
          viewport={{ once: true }}
          className='flex gap-12 h-fit w-full items-center'
        >
          <Button link arrow>
            Book an appointment
          </Button>
        </motion.div>
      </aside>
    </header>
  );
}
