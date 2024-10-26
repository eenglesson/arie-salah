'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';

import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

type Link = {
  name: string;
  path: string;
};

export default function Footer() {
  const companyLinks: Link[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks: Link[] = [
    { name: 'Twitter', path: '#' },
    { name: 'Facebook', path: '#' },
    { name: 'LinkedIn', path: '#' },
  ];

  return (
    <footer className='flex flex-col w-full gap-12 pb-12 border-b border-grey30 xl:flex-row'>
      <aside className='flex flex-col gap-4 w-full '>
        <div className='rounded-full'>
          <motion.div
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='overflow-hidden w-[96px] h-[96px] relative'
          >
            <Image
              src='/assets/legal1.png'
              alt='Legal image'
              fill
              objectFit='cover'
              objectPosition='center'
            />
          </motion.div>
        </div>
        <motion.p
          variants={fadeInAnimationVariantsBottom}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='shrink-0 text-bodyMedium sm:text-bodyDefault max-w-[600px]'
        >
          We pride ourselves on being a leading consulting law firm dedicated to
          providing comprehensive legal solutions tailored to meet the diverse
          needs of our clients.
        </motion.p>
        <div className='flex flex-col gap-1'>
          <motion.a
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='hover:underline group flex items-center gap-2'
          >
            <Mail size={16} />
            <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
              SalahLegal@gmail.com
            </span>
          </motion.a>
          <motion.a
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='hover:underline group flex items-center gap-2'
          >
            <Phone size={16} />
            <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
              +49 759 283 273
            </span>
          </motion.a>
        </div>
      </aside>
      <section className='flex flex-wrap sm:flex-row w-full gap-6 sm:gap-12 xl:justify-between'>
        <div>
          <motion.h4
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='font-normal text-bodyMedium sm:text-bodyDefault md:text-h4'
          >
            Company
          </motion.h4>
          <ul className='list-none flex flex-col gap-2 mt-3'>
            {companyLinks.map((link, index) => (
              <motion.li
                key={index}
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
              >
                <a
                  href={link.path}
                  className='underline-animation text-bodyMedium sm:text-bodyDefault'
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <motion.h4
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='font-normal text-bodyMedium sm:text-bodyDefault md:text-h4'
          >
            Social Media
          </motion.h4>
          <ul className='list-none flex flex-col gap-2 mt-3'>
            {socialLinks.map((link, index) => (
              <motion.li
                key={index}
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
              >
                <a
                  href={link.path}
                  className='underline-animation text-bodyMedium sm:text-bodyDefault'
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <motion.h4
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='font-normal text-bodyMedium sm:text-bodyDefault md:text-h4'
          >
            Contact Office
          </motion.h4>
          <motion.p
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='mt-3 text-bodyMedium sm:text-bodyDefault max-w-[270px] xl:w-full'
          >
            Perumsoka Asri Permai Block N. 14. Kadisoka Purwomartani, Kalasan,
            Yogyakarta.
          </motion.p>
        </div>
      </section>
    </footer>
  );
}
