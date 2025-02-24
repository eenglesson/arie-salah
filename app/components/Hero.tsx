'use client';
import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeInAnimationVariantsRight } from '@/lib/framerMotion';

export default function Hero() {
  return (
    <header className='w-full my-16 sm:my-12'>
      {/* Center the hero container horizontally */}
      <div className='max-w-4xl mx-auto'>
        <aside className='flex flex-col gap-6 sm:gap-14 px-8 text-left '>
          <div>
            <motion.h1
              variants={fadeInAnimationVariantsRight}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='text-h3 font-playfair md:text-h1 text-black'
            >
              Welkom bij Salah Legal Esq.
              <span className='block h-0 xl:hidden'>
                <br />
              </span>{' '}
              – Uw expert in bestuursrecht
            </motion.h1>
            <motion.p
              variants={fadeInAnimationVariantsRight}
              initial='initial'
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.1,
                  type: 'spring',
                  stiffness: 60,
                  damping: 20,
                },
              }}
              viewport={{ once: true }}
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
            variants={fadeInAnimationVariantsRight}
            initial='initial'
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.2,
                type: 'spring',
                stiffness: 60,
                damping: 20,
              },
            }}
            viewport={{ once: true }}
            className='flex gap-12 items-center'
          >
            <Button to='/contact' link arrow>
              Afspraak maken
            </Button>
          </motion.div>
        </aside>
      </div>
    </header>
  );
}
