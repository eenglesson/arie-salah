'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';

const services = [
  {
    id: '01',
    title: 'Deskundigheid',
    description:
      'Ons bureau heeft uitgebreide ervaring en kennis van het bestuursrecht in al zijn facetten.',
  },
  {
    id: '02',
    title: 'Pragmatische benadering',
    description:
      'Wij vertalen complexe juridische vraagstukken naar praktische oplossingen.',
  },
  {
    id: '03',
    title: 'Betrokkenheid',
    description:
      'Wij staan dicht bij onze cliënten en bieden persoonlijke en toegankelijke juridische diensten.',
  },
  {
    id: '04',
    title: 'Resultaatgericht',
    description:
      'Wij streven altijd naar het beste resultaat voor onze cliënten, zowel op korte als lange termijn.',
  },
];

export default function WeDo() {
  return (
    <section className='p-8 sm:p-12 bg-secondaryBeige rounded-2xl h-full shadow-lg'>
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
            Onze aanpak
          </motion.h2>
          <div className='flex flex-col xl:max-w-[800px] gap-4'>
            <motion.h3
              variants={fadeInAnimationVariantsBottom}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='text-h3 font-normal xl:text-h2 leading-relaxed break-words hyphens-auto'
            >
              Bij Salah Legal Esq. streven wij naar maatwerk in iedere zaak. We
              begrijpen dat bestuursrechtelijke vraagstukken vaak een directe
              impact hebben op organisaties en de maatschappij.
            </motion.h3>
            <motion.p
              variants={fadeInAnimationVariantsBottom}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='text-bodyMedium sm:text-bodyDefault'
            >
              Daarom bieden we niet alleen juridische antwoorden, maar denken we
              strategisch met u mee. Ons doel is om praktische en haalbare
              oplossingen te bieden, waarbij wij altijd oog hebben voor de lange
              termijn. <br />
              <br />
              Onze cliëntgerichte benadering zorgt ervoor dat wij met u
              samenwerken, waarbij uw belangen altijd centraal staan. Of het nu
              gaat om het verkrijgen van juridisch advies, het procederen in
              bestuursrechtelijke zaken, of het voorkomen van juridische
              conflicten, wij bieden een betrouwbare en deskundige
              ondersteuning.
            </motion.p>
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
              className='flex flex-col w-full sm:w-1/2 lg:w-1/3 py-6 sm:py-8 gap-2 border-b transition-colors duration-300 border-grey30 flex-grow '
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
