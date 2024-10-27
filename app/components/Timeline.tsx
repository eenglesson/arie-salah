'use client';
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  date: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      variants={fadeInAnimationVariantsBottom}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      className='w-full  bg-white dark:bg-neutral-950 font-sans -mt-10'
      ref={containerRef}
    >
      <div ref={ref} className='relative pb-20 '>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex justify-start pt-16 md:pt-32 md:gap-10 ' //
          >
            <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
              <div className='h-10 absolute rounded-full bg-white dark:bg-black flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-grey05 dark:bg-neutral-800 dark:border-neutral-700' />
              </div>
              <div className='flex-col hidden md:block md:pl-20 font-normal text-black '>
                <h3 className=' text-h3 tracking-wide'>{item.title}</h3>
                <p className='text-h4 text-dark50'>{item.date}</p>
              </div>
            </div>

            <div className='relative pl-16 pr-4 md:pl-4 w-full'>
              <div className='md:hidden block mb-4'>
                <h3 className='text-h4 tracking-wide text-left font-normal text-black '>
                  {item.title}
                </h3>
                <p className='text-bodyDefault text-dark50'>{item.date}</p>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute md:left-[7.6px] top-0 overflow-hidden w-[1px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-grey05 via-black to-transparent from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </motion.div>
  );
};
