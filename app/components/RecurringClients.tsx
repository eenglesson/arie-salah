import React from 'react';
import { motion } from 'framer-motion';

const proud = [
  {
    number: '56+',
    text: 'Different recurring clients are putting their faith in us',
  },
  {
    number: '10+',
    text: 'Different specialities in law and consulting services',
  },
  {
    number: '32+',
    text: 'Successful projects are behind us this year alone',
  },
  {
    number: '5+',
    text: 'Years of experience between our team',
  },
];

export default function RecurringClients() {
  return (
    <>
      <section className='w-full flex flex-col sm:flex-row flex-wrap items-stretch bg-transparent border rounded-2xl h-auto border-grey30 p-6'>
        {proud.map((obj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              type: 'spring',
              stiffness: 60,
              damping: 20,
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col justify-between sm:items-center w-full sm:w-1/2 lg:w-1/4 text-left p-4 sm:p-8 h-full'
          >
            <div className='sm:max-w-[200px]'>
              <h2 className='text-[50px] font-bold'>{obj.number}</h2>
              <p className='text-bodyMedium'>{obj.text}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}
