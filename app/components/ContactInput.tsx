'use client';

import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import React from 'react';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { Mail, Phone } from 'lucide-react';

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
              <aside className='hidden xl:flex flex-col gap-4'>
                <motion.h4
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-h4font-normal tracking-wide'
                >
                  Contact Information
                </motion.h4>
                <div className='hidden xl:flex flex-col gap-2'>
                  <motion.a
                    variants={fadeInAnimationVariantsBottom}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    className='hover:underline group flex items-center gap-2'
                    href='mailto:salahlegal@outlook.com'
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
                    className='hover:underline group flex items-center gap-2'
                    href='tel:+31648162676'
                  >
                    <Phone size={16} />
                    <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
                      06-48162676
                    </span>
                  </motion.a>
                  <motion.div
                    variants={fadeInAnimationVariantsBottom}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    className='flex flex-col gap-1 mt-4'
                  >
                    <span className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
                      KvK-nummer: 92043070
                    </span>
                    <span className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
                      BTW-nummer: NL004936556B76
                    </span>
                    <span className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
                      Postadres: postbus 7344, <br />
                      2701 AH Zoetermeer
                    </span>
                  </motion.div>
                </div>
              </aside>
              {/* Container for Image, middle of the div */}
            </div>
            <div className='flex flex-col xl:max-w-[800px] gap-12 sm:gap-24'>
              <div>
                <motion.h3
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-h3 font-normal xl:text-h2'
                >
                  Bij Salah Legal Esq. staan we altijd klaar om u te
                  ondersteunen bij bestuursrechtelijke vraagstukken. Of u nu
                  advies nodig heeft, hulp zoekt bij het indienen van een
                  bezwaar, of juridische bijstand zoekt in een complexe
                  rechtszaak, wij bieden de expertise die u nodig heeft.
                </motion.h3>
              </div>

              <ContactForm />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
