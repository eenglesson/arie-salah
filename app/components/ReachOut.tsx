import React from 'react';
import Button from './Button';

export default function ReachOut() {
  return (
    <>
      <section className='p-8 sm:p-12  bg-secondaryBeige rounded-2xl h-full'>
        <aside className='w-full flex flex-col gap-12 lg:gap-24 h-full'>
          {/* Top section with title */}
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <div className='flex flex-col justify-between'>
              <h2 className='text-bodyDefault font-normal tracking-wide shrink-0'>
                Reach Out
              </h2>
              <p className='hidden xl:flex max-w-[400px] text-dark70'>
                Connect with us today and let our experienced team guide you
                towards effective solutions and legal counsel.
              </p>
            </div>
            <div className='flex flex-col xl:max-w-[800px] gap-12'>
              <div>
                <h3 className='text-h3 font-normal xl:text-h2'>
                  We look forward to supporting you with tailored legal
                  solutions. Let’s get started.
                </h3>
                <p className='flex xl:hidden text-dark70'>
                  Connect with us today and let our experienced team guide you
                  towards effective solutions and legal counsel.
                </p>
              </div>
              <div className='flex xl:justify-end'>
                <Button linkBlack arrow>
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
