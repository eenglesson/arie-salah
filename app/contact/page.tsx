import React from 'react';
import Footer from '../components/Footer';
import ContactInput from '../components/ContactInput';
import Navbar1 from '../components/Navbar1';

export default function page() {
  return (
    <>
      <Navbar1 />

      <section className='max-w-[1600px] h-full flex flex-col pt-24 mx-auto px-4 gap-24 sm:gap-32 sm:px-16 pb-10'>
        <ContactInput />
        <Footer />
      </section>
    </>
  );
}
