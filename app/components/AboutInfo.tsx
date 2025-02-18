'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import ReachOut from './ReachOut';
import { Timeline } from './Timeline';

const timelineData = [
  {
    title: 'Participatiewet',
    date: '2024',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Advisering en procedures met betrekking tot het recht op bijstand en de
        verplichtingen van gemeenten en burgers.
      </p>
    ),
  },
  {
    title: 'Omgevingswet',
    date: '2024',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Juridisch advies over vergunningen, het omgevingsplan, en de
        implementatie van deze integrale wetgeving.
      </p>
    ),
  },
  {
    title: 'Jeugdwet',
    date: '2024',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Ondersteuning bij zaken rondom jeugdzorg, jeugdbescherming en
        jeugdhulpverlening.
      </p>
    ),
  },
  {
    title: 'WMO 2015',
    date: '2023',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Advies over de Wet maatschappelijke ondersteuning en de rechten van
        burgers op zorg en ondersteuning.
      </p>
    ),
  },
  {
    title: 'Handhavingsrecht',
    date: '2023',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Begeleiding bij handhavingsmaatregelen van bestuursorganen, zowel in
        administratief als in juridisch opzicht.
      </p>
    ),
  },
  {
    title: 'Gemeentewet',
    date: '2023',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Vraagstukken rond gemeentelijke organisatie, verordeningen en
        besluitvorming.
      </p>
    ),
  },
  {
    title: 'Wet open overheid (Woo)',
    date: '2023',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Begeleiding bij verzoeken om overheidsinformatie en de transparantie van
        publieke instellingen.
      </p>
    ),
  },
];

export default function AboutInfo() {
  return (
    <>
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
                Over Ons – Salah Legal Esq.
              </motion.h2>
              {/* Container for Image, middle of the div */}
            </div>
            <div className='flex flex-col xl:max-w-[800px] gap-6'>
              <div>
                <motion.h3
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-h3 font-normal xl:text-h2 hyphens-auto'
                >
                  Onze missie is eenvoudig: het bieden van betrouwbare,
                  strategische en praktische juridische oplossingen voor
                  bestuursrechtelijke vraagstukken. We begrijpen dat
                  bestuursrecht vaak complexe, ingrijpende en vaak tijdkritische
                  vraagstukken met zich meebrengt.
                </motion.h3>
                <motion.p
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-dark70 text-bodyMedium sm:text-bodyDefault'
                >
                  Daarom streven wij naar een efficiënte en effectieve
                  benadering van elk dossier. Wij helpen onze cliënten niet
                  alleen de juridische obstakels te overwinnen, maar zorgen er
                  ook voor dat ze proactief kunnen inspelen op veranderende wet-
                  en regelgeving.
                </motion.p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-12'>
            <h3 className='text-h3 font-normal z-20'>
              richten we ons op een breed scala aan bestuursrechtelijke
              onderwerpen. We hebben uitgebreide ervaring met onder andere
            </h3>
            <Timeline data={timelineData} />
          </div>
          <div>
            <p>
              Wat ons onderscheidt, is onze pragmatische en resultaatgerichte
              aanpak. Bij Salah Legal Esq. combineren wij diepgaande juridische
              kennis met een heldere focus op de praktische uitkomsten. We
              begrijpen dat elke zaak uniek is, en dus stemmen wij onze
              strategie altijd af op de specifieke situatie van onze cliënten.
              Of het nu gaat om het adviseren over beleidsontwikkeling, het
              procederen in bezwaar- of beroepszaken, of het begeleiden van
              handhavingsmaatregelen, wij bieden oplossingen die verder gaan dan
              alleen juridische antwoorden. Onze focus ligt niet alleen op het
              leveren van juridische bijstand, maar ook op het bieden van
              strategisch advies waarmee u beter kunt navigeren door de complexe
              bestuursrechtelijke omgeving. Wij zijn er om te zorgen dat onze
              cliënten niet alleen in lijn blijven met de wetgeving, maar dat
              zij ook hun doelstellingen op een efficiënte manier realiseren.
            </p>
          </div>
          <ReachOut />
        </aside>
      </section>
    </>
  );
}
