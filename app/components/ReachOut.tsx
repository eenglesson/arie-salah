'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import Button from './Button';

export default function ReachOut() {
  return (
    <>
      <section className='p-8 sm:p-12  bg-secondaryBeige rounded-2xl h-full'>
        <aside className='w-full flex flex-col gap-12 lg:gap-24 h-full'>
          {/* Top section with title */}
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <div className='flex flex-col justify-between'>
              <motion.h2
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='text-bodyDefault font-normal tracking-wide shrink-0'
              >
                Reach Out
              </motion.h2>
              <motion.p
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='hidden text-bodyMedium sm:text-bodyDefault  xl:flex max-w-[400px] text-dark70'
              >
                Connect with us today and let our experienced team guide you
                towards effective solutions and legal counsel.
              </motion.p>
            </div>
            <div className='flex flex-col xl:max-w-[800px] gap-12'>
              <div>
                <motion.h3
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-h3 font-normal xl:text-h2'
                >
                  We look forward to supporting you with tailored legal
                  solutions. Let’s get started.
                </motion.h3>
                <motion.p
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='flex xl:hidden text-bodyMedium sm:text-bodyDefault text-dark70'
                >
                  Connect with us today and let our experienced team guide you
                  towards effective solutions and legal counsel.
                </motion.p>
              </div>
              <motion.div
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='flex xl:justify-end'
              >
                <Button linkBlack arrow>
                  Get in touch
                </Button>
              </motion.div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
