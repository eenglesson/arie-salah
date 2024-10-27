import React from 'react';
import NavBar from '../components/Navbar';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import ContactInput from '../components/ContactInput';
import BlogPosts from '../components/BlogPosts';

export default function page() {
  return (
    <>
      <div className='px-4 sm:px-16  bg-secondaryBlack'>
        <NavBar />
      </div>
      <section className='max-w-[1600px] flex flex-col pt-8 mx-auto px-4 gap-24 sm:gap-32 sm:px-16 pb-10'>
        <ContactInput />
        <Footer />
      </section>
    </>
  );
}
