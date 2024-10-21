'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { fadeInAnimationVariantsRight } from '@/lib/framerMotion';

const services = [
  {
    id: 1,
    title: 'Mergers and Acquisitions',
    about: [
      'At Advocare, we handle a wide range of legal matters, including corporate law, intellectual property rights, employment law, real estate law, litigation, and more.',
    ],
  },
  {
    id: 2,
    title: 'How can I schedule a consultation with Advocare?',
    about: [
      'Scheduling a consultation with Advocare is easy. Simply contact us through phone or email, and our team will assist you in setting up a convenient appointment with one of our attorneys.',
    ],
  },
  {
    id: 3,
    title: 'What sets Advocare apart from other law firms?',
    about: [
      'Placing the needs and interests of our clients at the forefront, providing personalized attention, and tailoring solutions to meet their unique circumstances.',
    ],
  },
  {
    id: 4,
    title: 'Does Advocare offer pro bono services?',
    about: [
      'Embracing teamwork and cooperation within our firm, leveraging diverse perspectives and expertise to provide comprehensive solutions and achieve collective success.',
    ],
  },
  {
    id: 5,
    title: 'How does Advocare handle client confidentiality?',
    about: [
      'Demonstrating a commitment to social responsibility and making a positive impact in the communities we serve through pro bono work, volunteerism.',
    ],
  },
];

export default function FaqMenu() {
  const [activeDiv, setActiveDiv] = useState<number | null>(null); // Type the state correctly

  const toggleDiv = (divId: number) => {
    setActiveDiv(activeDiv === divId ? null : divId);
  };

  return (
    <>
      <motion.section
        variants={fadeInAnimationVariantsRight}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='flex flex-col gap-8'
      >
        <aside>
          {services.map((service) => (
            <motion.div
              variants={fadeInAnimationVariantsRight}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              key={service.id}
              className='border-b border-grey30 hover:border-black cursor-pointer overflow-hidden py-6 transition-colors duration-300'
              onClick={() => toggleDiv(service.id)}
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-h4 sm:text-h3 font-normal  '>
                  {service.title}
                </h3>
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
