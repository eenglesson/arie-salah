import React from 'react';
import { client, urlFor } from '../lib/sanity';
import { simpleBlogCard } from '../lib/types';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

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
  const data = await client.fetch(query);

  return data;
}

export default async function BlogPosts3Visible() {
  const data: simpleBlogCard[] = await getData();
  const latestThree = data.slice(0, 3);
  console.log('Data retrieved from Sanity:', data);

  return (
    <>
      <section>
        <aside className='w-full pt-[32px] xl:pt-[64px] flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <h2 className='text-bodyDefault font-normal tracking-wide shrink-0'>
              The latest stories
            </h2>
            <div className='flex flex-col xl:max-w-[800px] gap-2'>
              <div className='flex flex-col gap-8'>
                <h3 className='text-h3 font-normal xl:text-h2'>
                  Get the latest updates and relevant stories from our world.
                </h3>
                <div>
                  <Button linkBlack arrow>
                    Read Latest Stories
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col sm:flex-row flex-wrap items-stretch gap-16 h-full '>
            {latestThree.map((post, i) => (
              <Link
                href={`/blog/${post.currentSlug}`}
                key={i}
                className='flex flex-col w-full sm:w-1/2 lg:w-1/4 gap-4 cursor-pointer flex-grow group'
              >
                <div>
                  <div className='border-b pb-8 border-grey30'>
                    <div className='overflow-hidden rounded-2xl'>
                      <Image
                        src={urlFor(post.titleImage).url()}
                        alt={post.title}
                        width={800} // Use higher resolution width
                        height={800} // Use higher resolution height
                        style={{
                          objectFit: 'cover', // Ensures the image covers its container
                          width: '100%', // Responsive width
                          height: 'auto', // Maintains aspect ratio
                        }}
                        className='group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                  </div>
                  <h5 className='text-h4 sm:text-h3 pt-5 font-normal'>
                    {post.title}
                  </h5>
                </div>
                <div className='flex justify-between items-center'>
                  <b className='text-bodyMedium px-4 py-2 border border-black rounded-lg'>
                    {post.badge}
                  </b>
                  <span className='text-bodyMedium text-dark70'>
                    {post.releaseDate}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
