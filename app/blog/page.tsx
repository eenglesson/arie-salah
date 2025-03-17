import BlogPosts from '../components/BlogPosts';
import Footer from '../components/Footer';

import Navbar1 from '../components/Navbar1';
import ReachOut from '../components/ReachOut';
import { client } from '../lib/sanity';
import { simpleBlogCard } from '../lib/types';

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

export default async function page() {
  const data = await getData();
  return (
    <>
      <Navbar1 />
      <section className='max-w-[1600px] flex flex-col pt-24  mx-auto px-4 gap-24 sm:gap-32 sm:px-16 pb-10'>
        <BlogPosts data={data} />
        <ReachOut />
        <Footer />
      </section>
    </>
  );
}
