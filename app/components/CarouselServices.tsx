'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import {
  House,
  Landmark,
  PersonStanding,
  Scale,
  Signature,
} from 'lucide-react';

export default function CarouselServices() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const services = [
    {
      emblem: <Scale className='text-primary' />,
      title: 'Corporate Law',
      content:
        'Expert guidance for businesses lorem5dasdas <dsaf szdgf as asjfdhusadfh ajdsfha uds hfaudshf ausdhf a',
    },
    {
      emblem: <Landmark className='text-primary' />,
      title: 'Litigation',
      content: 'Skilled courtroom representation',
    },
    {
      emblem: <Signature className='text-primary' />,
      title: 'Contract Law',
      content: 'Drafting and negotiation',
    },
    {
      emblem: <House className='text-primary' />,
      title: 'Real Estate Law',
      content: 'Property transactions and disputes',
    },
    {
      emblem: <PersonStanding className='text-primary' />,
      title: 'Family Law',
      content: 'Compassionate family issue resolution',
    },
  ];

  return (
    <div className='w-full'>
      <div className='relative'>
        <Carousel setApi={setApi} className='w-full'>
          <CarouselContent className='-ml-2 sm:-ml-4'>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className='pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3'
              >
                <Card className='border-none shadow-none'>
                  <CardContent className='flex flex-col items-start p-4 sm:p-6 h-[300px] sm:h-[350px]'>
                    <span className='relative text-4xl mb-4'>
                      {React.cloneElement(service.emblem, {
                        size: 40,
                        className: 'relative z-10',
                      })}
                      <div className='absolute -top-1 rounded-full -right-2 w-9 h-9 bg-secondaryYellow/90 z-0'></div>
                    </span>
                    <h3 className='text-xl sm:text-2xl font-playfair font-semibold mb-2'>
                      {service.title}
                    </h3>
                    <p className='text-sm sm:text-base text-gray-600'>
                      {service.content}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='absolute top-1/2  -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none'>
            <CarouselPrevious
              className='relative sm:flex hidden -left-4 translate-x-0 pointer-events-auto'
              disabled={current === 0}
            />
            <CarouselNext
              className='relative sm:flex hidden  -right-4 translate-x-0 pointer-events-auto'
              disabled={current === count - 1}
            />
          </div>
        </Carousel>
      </div>
      <div className='flex justify-center mt-4 sm:hidden'>
        {services.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              current === index ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
