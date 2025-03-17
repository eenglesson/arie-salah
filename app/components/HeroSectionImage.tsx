'use client';
import Image from 'next/image';
import Hero from './Hero';
import { motion } from 'framer-motion';

const transitionVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    y: 20,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      opacity: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
        delay: customDelay,
      },
      y: { type: 'spring', bounce: 0.3, duration: 1.5, delay: customDelay },
      filter: { type: 'spring', bounce: 0, duration: 1.5, delay: customDelay },
    },
  }),
};

export default function HeroSectionImage() {
  return (
    <section className='h-screen bg-white mt-16 md:mt-24 flex flex-col'>
      {/* Container for the image: centered both horizontally and vertically */}
      <div className='flex h-full justify-center items-center'>
        <div className='mx-auto'>
          <motion.div
            variants={transitionVariants}
            custom={0.4}
            initial='hidden'
            animate='visible'
          >
            <Image
              src='/assets/LogoSalahLegalEsq.png'
              alt='img'
              width={700}
              height={700}
              priority={true}
              className='object-contain'
            />
          </motion.div>
        </div>
      </div>
      {/* Positioning the Hero at the bottom */}

      <Hero />
    </section>
  );
}
