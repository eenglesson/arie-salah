// pages/home.tsx
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BackgroundSection from './components/BackgroundSection';
import Services from './components/Services';
import WeDo from './components/WeDo';

export default function Home() {
  return (
    <>
      <BackgroundSection
        backgroundImage='/assets/pillars.jpg'
        className='min-h-screen py-4 px-4 sm:px-16'
      >
        <Navbar />
        <div className='relative flex-1'>
          {/* Positioning the Hero at the bottom */}
          <div className='absolute bottom-0 w-full'>
            <Hero />
          </div>
        </div>
      </BackgroundSection>

      {/* Additional content */}
      <section className='max-w-[1800px] flex flex-col mx-auto px-4 gap-[128px] sm:px-16 pb-10'>
        <Services />
        <WeDo />
      </section>
    </>
  );
}
