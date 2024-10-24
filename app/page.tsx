// pages/home.tsx
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BackgroundSection from './components/BackgroundSection';
import Services from './components/Services';
import WeDo from './components/WeDo';
import BlogPosts from './components/BlogPosts';
import Faq from './components/Faq';
import ReachOut from './components/ReachOut';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <BackgroundSection
        backgroundImage='/assets/pillars.jpg'
        className='min-h-screen sm:px-16'
      >
        <Navbar />
        <div className='relative flex-1'>
          {/* Positioning the Hero at the bottom */}
          <div className='absolute px-4 bottom-0 w-full'>
            <Hero />
          </div>
        </div>
      </BackgroundSection>

      {/* Additional content */}
      <section className='max-w-[1600px] flex flex-col mx-auto px-4 gap-24 sm:gap-32 sm:px-16 pb-10'>
        <Services />
        <WeDo />
        <BlogPosts />
        <Faq />
        <ReachOut />
        <Footer />
      </section>
    </>
  );
}
