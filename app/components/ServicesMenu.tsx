'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 60,
      damping: 20,
      delay: 0.2,
    },
  },
};

const services = [
  {
    id: 1,
    title: 'Integrity',
    about: [
      'Upholding honesty and ethical behavior in all interactions, ensuring transparency and trustworthiness in every aspect of our practice.',
    ],
  },
  {
    id: 2,
    title: 'Excellence',
    about: [
      'Striving for the highest standards of quality and performance, continuously seeking improvement and delivering exceptional results to our clients.',
    ],
  },
  {
    id: 3,
    title: 'Client-Centric Approach',
    about: [
      'Placing the needs and interests of our clients at the forefront, providing personalized attention, and tailoring solutions to meet their unique circumstances.',
    ],
  },
  {
    id: 4,
    title: 'Collaboration',
    about: [
      'Embracing teamwork and cooperation within our firm, leveraging diverse perspectives and expertise to provide comprehensive solutions and achieve collective success.',
    ],
  },
  {
    id: 5,
    title: 'Community Engagement',
    about: [
      'Demonstrating a commitment to social responsibility and making a positive impact in the communities we serve through pro bono work, volunteerism.',
    ],
  },
];

export default function ServicesMenu() {
  const [activeDiv, setActiveDiv] = useState<number | null>(null); // Type the state correctly

  const toggleDiv = (divId: number) => {
    setActiveDiv(activeDiv === divId ? null : divId);
  };

  return (
    <>
      <motion.section
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='flex flex-col gap-8'
      >
        <aside>
          {services.map((service) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              key={service.id}
              className='border-b border-grey30 hover:border-black cursor-pointer overflow-hidden py-6 transition-colors duration-300'
              onClick={() => toggleDiv(service.id)}
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-h3 xl:text-h2 '>{service.title}</h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeDiv === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowDown size={22} />
                </motion.div>
              </div>
              <AnimatePresence>
                {activeDiv === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <aside className='flex flex-col gap-5 pt-6'>
                      {service.about.map((about, index) => (
                        <p key={index} className='text-bodyDefault'>
                          {about}
                        </p>
                      ))}
                    </aside>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </aside>
      </motion.section>
    </>
  );
}
