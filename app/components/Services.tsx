import React from 'react';
import CarouselServices from './CarouselServices';

export default function Services() {
  return (
    <>
      <section>
        <aside className='w-full flex flex-col gap-[64px]'>
          <h2 className='text-h1 font-semibold font-playfair'>
            Our Range of Services
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            quod!
          </p>
          <CarouselServices />
        </aside>
      </section>
    </>
  );
}
