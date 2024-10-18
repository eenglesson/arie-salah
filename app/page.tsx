// pages/home.tsx
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BackgroundSection from './components/BackgroundSection';
import Services from './components/Services';

export default function Home() {
  return (
    <>
      <BackgroundSection
        backgroundImage='/assets/pillars.jpg'
        className='min-h-screen py-4 px-8'
      >
        <Navbar />
        <div className='flex flex-1 items-center justify-center'>
          <Hero />
        </div>
      </BackgroundSection>

      {/* Additional content */}
      <section className='max-w-[1800px] mx-auto py-4 px-4 sm:px-16'>
        <Services />
      </section>
    </>
  );
}
