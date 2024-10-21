import React from 'react';

import ServicesMenu from './ServicesMenu';
import RecurringClients from './RecurringClients';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <section className='pt-[32px] xl:pt-[64px]'>
        <aside className='w-full flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <div className='flex flex-col justify-start xl:justify-between w-full xl:w-1/3'>
              <h2 className='text-bodyDefault font-normal tracking-wide shrink-0'>
                Salah Legal ESQ. — Protecting Your Legal Rights.
              </h2>
              {/* Container for Image, middle of the div */}
            </div>
            <div className='flex flex-col xl:max-w-[800px] gap-6'>
              <div>
                <h3 className='text-h3 font-normal xl:text-h2'>
                  At Salah Legal ESQ. We pride ourselves on being a leading
                  consulting law firm dedicated to providing comprehensive legal
                  solutions tailored to meet the diverse needs of our clients.
                </h3>
                <p className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
                  our values serve as the foundation of everything we do. They
                  reflect our commitment to excellence, integrity, and a
                  client-centric approach.
                </p>
              </div>
              <ServicesMenu />
            </div>
          </div>
          <RecurringClients />
        </aside>
      </section>
    </>
  );
}
