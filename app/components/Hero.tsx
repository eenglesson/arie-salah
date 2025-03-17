'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
const transitionVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    y: 12,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      opacity: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
        delay: customDelay,
      },
      y: { type: 'spring', bounce: 0.3, duration: 1.5, delay: customDelay },
      filter: { type: 'spring', bounce: 0, duration: 1.5, delay: customDelay },
    },
  }),
};

export default function Hero() {
  return (
    <header className='w-full h-full my-16 sm:my-12'>
      {/* Center the hero container horizontally */}
      <div className='max-w-4xl mx-auto'>
        <aside className='flex flex-col gap-6 sm:gap-12 px-8 text-left '>
          <div>
            <motion.h1
              variants={transitionVariants}
              custom={0.4}
              initial='hidden'
              animate='visible'
              className='text-h3 font-playfair md:text-h1 text-black'
            >
              Welkom bij Salah Legal Esq.
              <span className='block h-0 xl:hidden'>
                <br />
              </span>{' '}
              – Uw expert in bestuursrecht
            </motion.h1>
            <motion.p
              variants={transitionVariants}
              custom={0.6}
              initial='hidden'
              animate='visible'
              className='text-grey70 text-bodySmall sm:text-bodyDefault'
            >
              Salah Legal Esq. is een jong en dynamisch juridisch adviesbureau,
              opgericht in november 2023, dat zich volledig richt op het
              bestuursrecht. Wij bieden praktische en strategische juridische
              ondersteuning aan overheden, bedrijven en individuen bij
              vraagstukken rondom het bestuursrecht. Onder leiding van A. (Arie)
              Salah, een ervaren specialist in dit vakgebied, combineren wij
              gedegen kennis van de wetgeving met een pragmatische benadering
              van juridische vraagstukken.
            </motion.p>
          </div>
          <motion.div
            variants={transitionVariants}
            custom={0.8}
            initial='hidden'
            animate='visible'
          >
            <Link href='/contact'>
              <button className='group text-small w-fit text-foreground flex items-center justify-between md:text-body transition-transform duration-200 font-normal z-30 rounded-full border-foreground  hover:cursor-pointer gap-2 underline-animation'>
                Afspraak maken
                <div className='transition-transform duration-200 group-hover:-rotate-45'>
                  <ArrowRight className='w-[20px] h-[20px]' />
                </div>
              </button>
            </Link>
          </motion.div>
        </aside>
      </div>
    </header>
  );
}

// Afspraak maken
