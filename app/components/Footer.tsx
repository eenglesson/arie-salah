'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';

import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Link = {
  name: string;
  path: string;
};

export default function Footer() {
  const companyLinks: Link[] = [
    { name: 'Home', path: '/' },
    { name: 'Over ons', path: '/Over-ons' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy', path: '/privacy' },
  ];

  const socialLinks: Link[] = [
    { name: 'Twitter', path: '#' },
    { name: 'Facebook', path: '#' },
    { name: 'LinkedIn', path: '#' },
  ];

  return (
    <>
      <footer className='flex flex-col w-full '>
        <section className='flex flex-col xl:flex-row border-b border-grey30 gap-12 pb-12 '>
          <aside className='flex flex-col gap-4 w-full '>
            <div>
              <motion.div
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='overflow-hidden w-[64px] h-[64px] sm:w-[96px] sm:h-[96px] relative'
              >
                <Image
                  src='/assets/legal1.png'
                  alt='Legal image'
                  fill
                  sizes='96px' // Specify the size here to match the container size
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
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
              We pride ourselves on being a leading consulting law firm
              dedicated to providing comprehensive legal solutions tailored to
              meet the diverse needs of our clients.
            </motion.p>
            <div className='flex flex-col gap-2'>
              <motion.a
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='underline-animation group w-fit flex items-center gap-2'
                href='mailto:SalahLegal@outlook.com'
              >
                <Mail size={16} />
                <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
                  salahlegal@outlook.com
                </span>
              </motion.a>
              <motion.a
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='w-fit group flex items-center gap-2'
              >
                <Phone size={16} />
                <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
                  06-48162676
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
                    initial={{ opacity: 0, y: 30 }}
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
                    <a href={link.path}>
                      <p className='w-fit underline-animation text-bodyMedium sm:text-bodyDefault'>
                        {link.name}
                      </p>
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
                    initial={{ opacity: 0, y: 30 }}
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
                    <a href={link.path}>
                      <p className='w-fit underline-animation text-bodyMedium sm:text-bodyDefault'>
                        {link.name}
                      </p>
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
                Postadres
              </motion.h4>
              <motion.p
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='mt-3 text-bodyMedium sm:text-bodyDefault max-w-[270px] xl:w-full'
              >
                postbus 7344, <br />
                2701 AH Zoetermeer
              </motion.p>
            </div>
          </section>
        </section>
        <motion.div
          variants={fadeInAnimationVariantsBottom}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='flex flex-col md:flex-row justify-between items-center gap-2 mt-2'
        >
          <p className=' font-normal text-dark70 text-sm sm:font-medium'>
            © {new Date().getFullYear()} Salah Legal Esq. All rights reserved.
          </p>

          <Link
            href='https://www.eenglesson.com'
            className='font-normal underline-animation text-dark70 hover:text-black text-sm '
          >
            Crafted with passion by E | Englesson
          </Link>
        </motion.div>
      </footer>
    </>
  );
}
