'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import Button from './Button';
import Image from 'next/image';

const services = [
  {
    id: '01',
    img: '/assets/bankruptcy.jpg',
    title: 'Business Law',
    badge: 'Corporate',
    date: 'Jan 15, 2024',
  },
  {
    id: '02',
    img: '/assets/books.jpg',
    title: 'Intellectual Property Rights',
    badge: 'Case',
    date: 'Feb 26, 2024',
  },
  {
    id: '03',
    img: '/assets/stonehead.jpg',
    title: 'Employment Law',
    badge: 'Common',
    date: 'Mar 25, 2024',
  },
];

export default function BlogPosts() {
  return (
    <>
      {' '}
      <section>
        <aside className='w-full flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <motion.h2
              variants={fadeInAnimationVariantsBottom}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='text-bodyDefault font-normal tracking-wide shrink-0'
            >
              The latest stories
            </motion.h2>
            <div className='flex flex-col xl:max-w-[800px] gap-2'>
              <div className='flex flex-col gap-8'>
                <motion.h3
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-h3 font-normal xl:text-h2'
                >
                  We offer a comprehensive array of legal services tailored to
                  meet the diverse needs of our clients.
                </motion.h3>
                <motion.div
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                >
                  {' '}
                  <Button linkBlack arrow>
                    Read Latest Stories
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col sm:flex-row flex-wrap items-stretch gap-16 h-full '>
            {services.map((service, index) => (
              <motion.div
                key={index} // Keep key here
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 60,
                  damping: 20,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-col w-full sm:w-1/2 lg:w-1/4 gap-4 cursor-pointer  flex-grow'
              >
                <div>
                  <div className='border-b  pb-8 border-grey30'>
                    <div className='overflow-hidden rounded-2xl group'>
                      <Image
                        src={service.img}
                        alt={service.title} // Use a descriptive alt text
                        width={200} // Define the width for responsive behavior
                        height={200} // Define the height
                        layout='responsive' // Ensures responsive behavior
                        objectFit='cover' // Ensures proper scaling of the image
                        className='group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                  </div>

                  <h5 className='text-h4 sm:text-h3 pt-5 font-normal'>
                    {service.title}
                  </h5>
                </div>
                <div className='flex justify-between items-center'>
                  <b className='text-bodyMedium px-4 py-2 border border-black rounded-lg'>
                    {service.badge}
                  </b>
                  <span className='text-bodyMedium text-dark70'>
                    {service.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
