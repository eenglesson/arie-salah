'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import FaqMenu from './FaqMenu';

export default function Faq() {
  return (
    <>
      <section>
        <aside className='w-full flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <div className='flex flex-col justify-between'>
              <motion.h2
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='text-bodyDefault font-normal tracking-wide shrink-0'
              >
                FAQ
              </motion.h2>
              <motion.p
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='max-w-[400px] text-bodyMedium sm:text-bodyDefault xl:flex hidden text-dark70'
              >
                How does it work and where to start? We&apos;ve collected
                answers to most of the basic questions in order to be as open
                and transparent as possible.
              </motion.p>
            </div>
            <div className='flex flex-col xl:max-w-[800px] gap-16'>
              <div>
                <motion.h3
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-h3 font-normal xl:text-h2'
                >
                  Let us answer some of the most common questions you might have
                  upfront.
                </motion.h3>
                <motion.p
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='flex xl:hidden text-bodyMedium sm:text-bodyDefault text-dark70'
                >
                  How does it work and where to start? We&apos;ve collected
                  answers to most of the basic questions in order to be as open
                  and transparent as possible.
                </motion.p>
              </div>
              <FaqMenu />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
