'use client';
import React from 'react';
import { urlFor } from '../lib/sanity';
import { simpleBlogCard } from '../lib/types';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import { motion } from 'framer-motion';

type BlogPostsProps = {
  data?: simpleBlogCard[];
  showOnly3?: boolean;
  showButton?: boolean;
};

export default function BlogPosts({
  data = [],
  showOnly3 = false,
  showButton = false,
}: BlogPostsProps) {
  const displayData = showOnly3 ? data.slice(0, 3) : data;

  return (
    <>
      <section>
        <aside className='w-full pt-[32px] xl:pt-[64px] flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-6'>
            <motion.h2
              variants={fadeInAnimationVariantsBottom}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='text-bodyDefault md:text-h4 font-normal tracking-wide shrink-0'
            >
              Blog
            </motion.h2>
            <div className='flex flex-col xl:max-w-[800px] gap-2'>
              <div className='flex flex-col gap-8'>
                <motion.h3
                  variants={fadeInAnimationVariantsBottom}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  className='text-h3 font-normal xl:text-h2'
                >
                  Waar we u op de hoogte houden van de nieuwste juridische
                  ontwikkelingen, aankondigingen van ons kantoor en
                  branche-inzichten.
                </motion.h3>
                {showButton && (
                  <motion.div
                    variants={fadeInAnimationVariantsBottom}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                  >
                    <Button to='/blog' linkBlack arrow>
                      Lees de laatste verhalen
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <div
            className={`w-full grid gap-16 sm:gap-12 h-full ${
              showOnly3
                ? 'lg:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {displayData.length > 0 ? (
              displayData.map((post, i) => (
                <Link
                  href={`/blog/${post.currentSlug}`}
                  key={i}
                  className='flex flex-col gap-4 justify-between cursor-pointer group'
                >
                  <motion.aside
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      type: 'spring',
                      stiffness: 60,
                      damping: 20,
                      delay: i * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='flex flex-col h-full gap-4 justify-between '
                  >
                    <div className='flex flex-col'>
                      <div className='border-b pb-5 sm:pb-8 border-grey30'>
                        <div className='overflow-hidden rounded-2xl w-full'>
                          <Image
                            src={
                              post.titleImage
                                ? urlFor(post.titleImage).url()
                                : '/assets/legal1.png'
                            }
                            alt={post.title}
                            width={800}
                            height={800}
                            className='object-cover w-full md:h-[250px] lg:h-[250px] xl:h-[300px]  group-hover:scale-105 transition-transform duration-300'
                          />
                        </div>
                      </div>
                      <h5 className='text-h4 sm:text-h3 pt-3 sm:pt-5 font-normal'>
                        {post.title}
                      </h5>
                    </div>
                    <div className='flex justify-between items-center'>
                      <b className='text-bodyMedium px-4 py-2 border border-black rounded-lg'>
                        {post.badge}
                      </b>
                      <span className='text-bodyMedium text-dark70'>
                        {post.releaseDate}
                      </span>
                    </div>
                  </motion.aside>
                </Link>
              ))
            ) : (
              <motion.div
                variants={fadeInAnimationVariantsBottom}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                className='col-span-full flex flex-col items-center justify-center py-20 text-center'
              >
                <div className='text-h3 font-normal mb-4'>
                  Geen blogs beschikbaar
                </div>
                <p className='text-dark70 text-bodyMedium sm:text-bodyDefault max-w-md'>
                  Er zijn momenteel geen blogberichten gepubliceerd. Kom
                  binnenkort terug voor de nieuwste juridische inzichten.
                </p>
              </motion.div>
            )}
          </div>
        </aside>
      </section>
    </>
  );
}
