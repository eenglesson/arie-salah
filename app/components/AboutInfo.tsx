'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import ReachOut from './ReachOut';
import { Timeline } from './Timeline';

const timelineData = [
  {
    title: 'Opening a New Branch',
    date: '2024',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Opened a new branch office to better serve clients in a different
        region. This expansion is a key step towards extending our services to
        more communities.
      </p>
    ),
  },
  {
    title: 'Client Satisfaction Program',
    date: '2024',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Launched our client satisfaction program to gather feedback and ensure
        we are consistently exceeding client expectations.
      </p>
    ),
  },
  {
    title: 'First Major Case Win',
    date: '2024',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Achieved a significant victory in our first major case. This milestone
        solidified our reputation as a trusted firm with skilled litigators.
      </p>
    ),
  },
  {
    title: 'Expansion of Practice Areas',
    date: '2023',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Expanded into additional practice areas, including family law, corporate
        law, and intellectual property. This allowed us to serve a broader range
        of client needs.
      </p>
    ),
  },
  {
    title: 'First Client Onboarded',
    date: '2023',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Successfully onboarded the first client. This milestone marked the
        beginning of providing expert legal counsel and representation to our
        clients.
      </p>
    ),
  },
  {
    title: 'Firm Establishment',
    date: '2023',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        The legal firm was officially established. Initial efforts focused on
        setting up office operations, building a team, and defining core legal
        practice areas.
      </p>
    ),
  },
];

export default function AboutInfo() {
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
                About
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
                  At Salah Legal ESQ. We pride ourselves on being a leading
                  consulting law firm dedicated to providing comprehensive legal
                  solutions tailored to meet the diverse needs of our clients.
                </motion.h3>
              </div>
            </div>
          </div>
          <Timeline data={timelineData} />
          <ReachOut />
        </aside>
      </section>
    </>
  );
}
