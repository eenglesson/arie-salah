import React from 'react';
import ServicesMenu from './ServicesMenu';
import FaqMenu from './FaqMenu';

export default function Faq() {
  return (
    <>
      <section>
        <aside className='w-full flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <div className='flex flex-col justify-between'>
              <h2 className='text-bodyDefault font-normal tracking-wide shrink-0'>
                FAQ
              </h2>
              <p className='max-w-[400px] xl:flex hidden text-dark70'>
                How does it work and where to start? We've collected answers to
                most of the basic questions in order to be as open and
                transparent as possible.
              </p>
            </div>
            <div className='flex flex-col xl:max-w-[800px] gap-16'>
              <div>
                <h3 className='text-h3 font-normal xl:text-h2'>
                  Let us answer some of the most common questions you might have
                  upfront.
                </h3>
                <p className='flex xl:hidden text-dark70'>
                  How does it work and where to start? We've collected answers
                  to most of the basic questions in order to be as open and
                  transparent as possible.
                </p>
              </div>
              <FaqMenu />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
