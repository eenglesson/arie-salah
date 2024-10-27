'use client';

import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import React from 'react';
import ServicesMenu from './ServicesMenu';
import RecurringClients from './RecurringClients';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactInput() {
  return (
    <>
      {' '}
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
                Contact
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
                  className='text-h3 font-normal xl:text-h2'
                >
                  Reach out to us if you have any questions or specific requests
                </motion.h3>
              </div>

              <ContactForm />
            </div>
          </div>
          <RecurringClients />
        </aside>
      </section>
    </>
  );
}
