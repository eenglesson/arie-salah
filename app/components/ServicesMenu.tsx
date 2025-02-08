'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { fadeInAnimationVariantsRight } from '@/lib/framerMotion';

const services = [
  {
    id: 1,
    title: 'Participatiewet',
    about: [
      'Advies en procedures omtrent de rechten en verplichtingen op het gebied van werk en sociale zekerheid.',
    ],
  },
  {
    id: 2,
    title: 'Omgevingswet',
    about: [
      'Begeleiding bij de implementatie en uitvoering van de Omgevingswet, inclusief vergunningen en handhaving.',
    ],
  },
  {
    id: 3,
    title: 'Jeugdwet',
    about: [
      'Juridisch advies over de zorg en ondersteuning van jeugdigen, inclusief jeugdbescherming en jeugdhulp.',
    ],
  },
  {
    id: 4,
    title: 'WMO 2015',
    about: [
      'Hulp bij de wet maatschappelijke ondersteuning, inclusief ondersteuning voor mensen met een beperking.',
    ],
  },
  {
    id: 5,
    title: 'Handhavingsrecht',
    about: [
      'Begeleiding bij het nemen van handhavingsmaatregelen en de verdediging van besluiten in bezwaar en beroep.',
    ],
  },
  {
    id: 6,
    title: 'Gemeentewet',
    about: [
      'Advies over gemeentelijke besluitvorming, bevoegdheden en verordeningen.',
    ],
  },
  {
    id: 7,
    title: 'Wet open overheid (Woo)',
    about: [
      'Ondersteuning bij verzoeken om informatie op grond van de Wet open overheid.',
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
                <h3 className='text-h4 sm:text-h3 font-normal'>
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
