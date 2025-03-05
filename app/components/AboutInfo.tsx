'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import statement
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import ReachOut from './ReachOut';
import { Timeline } from './Timeline';

const timelineData = [
  {
    title: 'Participatiewet',
    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Advisering en procedures met betrekking tot het recht op bijstand en de
        verplichtingen van gemeenten en burgers.
      </p>
    ),
  },
  {
    title: 'Omgevingswet',

    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Juridisch advies over vergunningen, het omgevingsplan, en de
        implementatie van deze integrale wetgeving.
      </p>
    ),
  },
  {
    title: 'Jeugdwet',

    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Ondersteuning bij zaken rondom jeugdzorg, jeugdbescherming en
        jeugdhulpverlening.
      </p>
    ),
  },
  {
    title: 'WMO 2015',

    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Advies over de Wet maatschappelijke ondersteuning en de rechten van
        burgers op zorg en ondersteuning.
      </p>
    ),
  },
  {
    title: 'Handhavingsrecht',

    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Begeleiding bij handhavingsmaatregelen van bestuursorganen, zowel in
        administratief als in juridisch opzicht.
      </p>
    ),
  },
  {
    title: 'Gemeentewet',

    content: (
      <p className='text-neutral-700 dark:text-neutral-300'>
        Vraagstukken rond gemeentelijke organisatie, verordeningen en
        besluitvorming.
      </p>
    ),
  },
  {
    title: 'Wet open overheid (Woo)',
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
          <motion.div
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='flex flex-col gap-12'
          >
            <h3 className='text-h3 font-normal z-20'>
              Richten we ons op een breed scala aan bestuursrechtelijke
              onderwerpen. We hebben uitgebreide ervaring met onder andere
            </h3>
            <Timeline data={timelineData} />
          </motion.div>
          <div className='flex flex-col gap-12'>
            <h3 className='text-h3  font-normal tracking-wide shrink-0'>
              Onze werkwijze
            </h3>
            <p className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
              Wat ons onderscheidt, is onze pragmatische en resultaatgerichte
              aanpak. Bij Salah Legal Esq. combineren wij diepgaande juridische
              kennis met een heldere focus op de praktische uitkomsten. We
              begrijpen dat elke zaak uniek is, en dus stemmen wij onze
              strategie altijd af op de specifieke situatie van onze cliënten.{' '}
              Of het nu gaat om het adviseren over beleidsontwikkeling, het
              procederen in bezwaar- of beroepszaken, of het begeleiden van
              handhavingsmaatregelen, wij bieden oplossingen die verder gaan dan
              alleen juridische antwoorden. <br />
              <br /> Onze focus ligt niet alleen op het leveren van juridische
              bijstand, maar ook op het bieden van strategisch advies waarmee u
              beter kunt navigeren door de complexe bestuursrechtelijke
              omgeving. Wij zijn er om te zorgen dat onze cliënten niet alleen
              in lijn blijven met de wetgeving, maar dat zij ook hun
              doelstellingen op een efficiënte manier realiseren.
            </p>
          </div>
          <motion.div
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='flex flex-col gap-12'
          >
            <h3 className='text-h3 font-normal tracking-wide shrink-0'>
              Wie is Arie Salah?
            </h3>
            <p className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
              Salah Legal Esq. staat onder leiding van A. (Arie) Salah, een
              ervaren jurist met uitgebreide kennis van het bestuursrecht. Arie
              heeft jarenlang ervaring opgedaan in zowel de publieke als de
              private sector en is gepassioneerd over het helpen van cliënten om
              hun juridische uitdagingen effectief aan te pakken. <br /> <br />{' '}
              Zijn pragmatische en toegankelijke stijl maakt hem tot een
              gewaardeerde gesprekspartner voor zowel overheden als bedrijven
              die behoefte hebben aan heldere juridische ondersteuning.
            </p>
          </motion.div>

          {/* Why choose Salah Legal section */}
          <motion.div
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='flex flex-col gap-12'
          >
            <h3 className='text-h3  font-normal tracking-wide shrink-0'>
              Waarom kiezen voor Salah Legal Esq.?
            </h3>
            <ul className='list-disc pl-5 text-dark70 text-bodyMedium sm:text-bodyDefault space-y-2'>
              <li>
                <span className='font-semibold text-black'>Expertise:</span> Wij
                zijn gespecialiseerd in bestuursrecht, met diepgaande kennis van
                onder andere de Participatiewet, Omgevingswet, Jeugdwet, WMO
                2015, en andere aanverwante wet- en regelgeving.
              </li>
              <li>
                <span className='font-semibold text-black'>
                  Persoonlijke benadering:
                </span>{' '}
                Wij luisteren naar uw specifieke behoeften en ontwikkelen op
                maat gemaakte oplossingen.
              </li>
              <li>
                <span className='font-semibold text-black'>
                  Pragmatisch en resultaatgericht:
                </span>{' '}
                Wij streven niet alleen naar juridische correctheid, maar ook
                naar de beste uitkomst voor onze cliënten.
              </li>
              <li>
                <span className='font-semibold text-black'>Betrouwbaar:</span>{' '}
                Wij zetten ons in voor de belangen van onze cliënten en staan
                bekend om onze integriteit en transparantie.
              </li>
            </ul>
          </motion.div>

          {/* Neem contact met ons op */}
          <motion.div
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='flex flex-col gap-12'
          >
            <h3 className='text-h3 font-normal tracking-wide shrink-0'>
              Neem contact met ons op
            </h3>
            <p className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
              Bij Salah Legal Esq. staan we altijd klaar om u te ondersteunen
              bij bestuursrechtelijke vraagstukken. Of u nu advies nodig heeft,
              hulp zoekt bij het indienen van een bezwaar, of juridische
              bijstand zoekt in een complexe rechtszaak, wij bieden de expertise
              die u nodig heeft.
            </p>
            <div className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
              <p className='font-semibold text-black'>Salah Legal Esq.</p>
              <p>Onder leiding van A. (Arie) Salah</p>
              <div className='mt-4 space-y-1'>
                <p>KvK-nummer: 92043070</p>
                <p>BTW-nummer: NL004936556B76</p>
                <p>Postadres: postbus 7344, 2701 AH Zoetermeer</p>
                <p>
                  E-mailadres:{' '}
                  <a
                    href='mailto:salahlegal@outlook.com'
                    className='hover:underline'
                  >
                    salahlegal@outlook.com
                  </a>
                </p>
                <p>
                  Telefoonnummer:{' '}
                  <a href='tel:+06-48162676' className='hover:underline'>
                    06-48162676
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          <ReachOut />
        </aside>
      </section>
    </>
  );
}
