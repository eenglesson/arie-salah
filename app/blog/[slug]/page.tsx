import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ReachOut from '@/app/components/ReachOut';
import { client, urlFor } from '@/app/lib/sanity';
import { fullBlog } from '@/app/lib/types';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react';

async function getData(slug: string) {
  const query = `
  *[_type == "blog" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
        title,
        smallDescription,
        content,
        titleImage,
        badge,
        releaseDate
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function page({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);
  console.log(data);

  return (
    <>
      <nav className='px-4 sm:px-16  bg-secondaryBlack'>
        <Navbar />
      </nav>
      <section className='max-w-[1600px] flex flex-col mx-auto px-4 gap-24 sm:gap-32 sm:px-16 pb-10'>
        <section className='pt-[32px] xl:pt-[64px]'>
          <aside className='w-full flex flex-col gap-24'>
            <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
              <div className='flex flex-col justify-start w-full xl:w-1/3 gap-2'>
                <span className='text-bodySmall sm:text-bodyMedium text-dark70'>
                  {data.releaseDate}
                </span>
                <p className='w-fit text-bodyMedium px-4 py-2 border border-black rounded-lg'>
                  {data.badge}
                </p>
                <h2 className='text-h4 sm:text-h2 font-normal tracking-wide shrink-0'>
                  {data.title}
                </h2>
              </div>
              <div className='flex flex-col xl:max-w-[800px] gap-10'>
                <aside className='border-b pb-10 border-grey30 flex flex-col gap-6'>
                  <Image
                    src={urlFor(data.titleImage).url()}
                    alt={data.title}
                    width={800} // Use higher resolution width
                    height={800} // Use higher resolution height
                    style={{
                      objectFit: 'cover', // Ensures the image covers its container
                      width: '100%', // Responsive width
                      height: 'auto', // Maintains aspect ratio
                    }}
                    className='group-hover:scale-105 rounded-2xl transition-transform duration-300 '
                  />
                  <h3 className='text-h4 font-normal xl:text-h3'>
                    {data.smallDescription}
                  </h3>
                </aside>
                <div className='flex flex-col gap-6'>
                  <div className='text-secondaryBlack prose-xl text-bodyMedium sm:text-bodyDefault'>
                    <PortableText value={data.content} />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
        <ReachOut />
        <Footer />
      </section>
    </>
  );
}
