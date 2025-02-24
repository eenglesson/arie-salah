// pages/home.tsx
import Hero from './components/Hero';
import Navbar from './components/Navbar';

import Services from './components/Services';
import WeDo from './components/WeDo';

import ReachOut from './components/ReachOut';
import Footer from './components/Footer';
import BlogPosts from './components/BlogPosts';
import { simpleBlogCard } from './lib/types';
import { client } from './lib/sanity';
import Image from 'next/image';

export const revalidate = 30; // ISR revalidate every 30 seconds

async function getData() {
  const query = `
    *[_type == 'blog'] {
      title,
      smallDescription,
      'currentSlug': slug.current,
      titleImage,
      badge,
      releaseDate,
    }
  `;
  const data: simpleBlogCard[] = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div className='px-4 sm:px-16 w-full bg-secondaryBlack'>
        <Navbar />
      </div>
      <section className='h-screen relative bg-white'>
        {/* Container for the image: centered both horizontally and vertically */}
        <div
          className='flex justify-center items-center'
          style={{ height: '50vh' }}
        >
          <div className='mx-auto' style={{ height: '100%', width: 'auto' }}>
            <Image
              src='/assets/LogoSalahLegalEsq.png'
              alt='img'
              width={1000}
              height={1000}
              priority={true}
              className='object-contain'
              style={{ height: '100%', width: 'auto' }}
            />
          </div>
        </div>
        {/* Positioning the Hero at the bottom */}
        <div className='absolute bottom-0 w-full'>
          <Hero />
        </div>
      </section>

      {/* Additional content */}
      <section className='max-w-[1600px] flex flex-col mx-auto px-4 gap-24 sm:gap-32 sm:px-16 pb-10'>
        <Services />
        <WeDo />
        <BlogPosts data={data} showButton={true} showOnly3={true} />
        {/* <Faq /> */}
        <ReachOut />
        <Footer />
      </section>
    </>
  );
}
