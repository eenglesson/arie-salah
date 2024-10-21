'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';

const services = [
  {
    id: '01',
    title: 'Corporate Law',
    description:
      'From entity formation to mergers and acquisitions, we provide strategic guidance and transactional support to businesses of all sizes.',
  },
  {
    id: '02',
    title: 'Intellectual Property Rights',
    description:
      'Our expertise in intellectual property law ensures your rights are safeguarded through patents, trademarks, and copyrights.',
  },
  {
    id: '03',
    title: 'Employment Law',
    description:
      'We provide guidance on matters such as employee contracts, discrimination claims, and compliance with labor regulations.',
  },
  {
    id: '04',
    title: 'Real Estate Law',
    description:
      "Whether you're buying, selling, or leasing property, we offer comprehensive legal services to ensure smooth transactions and mitigate risks.",
  },
  {
    id: '05',
    title: 'Litigation and Dispute Resolution',
    description:
      'When conflicts arise, our seasoned litigators are here to advocate for your interests in negotiations, mediation, arbitration, and courtroom litigation.',
  },
  {
    id: '06',
    title: 'Mergers and Acquisitions',
    description:
      'Our team assists clients throughout the entire M&A process, from due diligence to negotiation, helping you achieve your strategic goals.',
  },
];

export default function WeDo() {
  return (
    <section className='p-8 sm:p-12 bg-secondaryBeige rounded-2xl h-full'>
      <aside className='w-full flex flex-col gap-12 lg:gap-24 h-full'>
        {/* Top section with title */}
        <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
          <motion.h2
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='text-bodyDefault font-normal tracking-wide shrink-0'
          >
            What we do
          </motion.h2>
          <div className='flex flex-col xl:max-w-[800px] gap-2'>
            <motion.h3
              variants={fadeInAnimationVariantsBottom}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='text-h3 font-normal xl:text-h2'
            >
              We offer a comprehensive array of legal services tailored to meet
              the diverse needs of our clients.
            </motion.h3>
          </div>
        </div>

        {/* Services grid that stretches to fill space */}
        <div className='w-full flex flex-col sm:flex-row flex-wrap items-stretch gap-6 h-full'>
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
              className='flex flex-col w-full sm:w-1/2 lg:w-1/4 py-6 sm:py-8 gap-2 border-b hover:border-black transition-colors duration-300 border-grey30 flex-grow'
            >
              <div>
                <h4 className='text-h4 sm:text-h3 font-normal'>{service.id}</h4>
                <h5 className='text-h4 sm:text-h3 font-normal'>
                  {service.title}
                </h5>
              </div>
              <p className='text-bodyMedium'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </aside>
    </section>
  );
}
