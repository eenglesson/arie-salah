'use client';
import React from 'react';
import { motion } from 'framer-motion';

import ServicesMenu from './ServicesMenu';
import RecurringClients from './RecurringClients';
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';

export default function Services() {
  return (
    <>
      <section className='pt-[32px] xl:pt-[64px]'>
        <aside className='w-full flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <div className='flex flex-col justify-start xl:justify-between w-full xl:w-1/3'>
              <motion.h2
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='text-bodyDefault font-normal tracking-wide shrink-0'
              >
                Salah Legal ESQ. — Onze expertise.
              </motion.h2>
              {/* Container for Image, middle of the div */}
            </div>
            <div className='flex flex-col xl:max-w-[800px] gap-6'>
              <div>
                <motion.h3
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-h3 font-normal xl:text-h2 hyphens-auto'
                >
                  Wij zijn gespecialiseerd in een breed scala aan
                  bestuursrechtelijke vraagstukken.
                </motion.h3>
                <motion.p
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-dark70 text-bodyMedium sm:text-bodyDefault'
                >
                  Wij staan zowel overheden als andere partijen bij in complexe
                  bestuursrechtelijke procedures, of het nu gaat om advisering,
                  bezwaar- en beroepsprocedures, of het uitvoeren van juridische
                  risicoanalyses.
                </motion.p>
              </div>
              <ServicesMenu />
            </div>
          </div>
          <RecurringClients />
        </aside>
      </section>
    </>
  );
}
