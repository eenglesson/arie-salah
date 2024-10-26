import React from 'react';
import { client, urlFor } from '../lib/sanity';
import { simpleBlogCard } from '../lib/types';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
export const revalidate = 30; // revalidate at most 30 sec

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

export default async function BlogPosts({
  showOnly3 = false,
  showButton = false,
}) {
  const data: simpleBlogCard[] = await getData();
  console.log('Data retrieved from Sanity:', data);
  const displayData = showOnly3 ? data.slice(0, 3) : data;
  return (
    <>
      <section>
        <aside className='w-full pt-[32px] xl:pt-[64px] flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
            <h2 className='text-bodyDefault md:text-h4 font-normal tracking-wide shrink-0'>
              Blog
            </h2>
            <div className='flex flex-col xl:max-w-[800px] gap-2'>
              <div className='flex flex-col gap-8'>
                <h3 className='text-h3 font-normal xl:text-h2'>
                  Where we keep you informed about the latest legal
                  developments, firm announcements, and industry insights.
                </h3>
                {showButton && (
                  <div>
                    <Button to='/blog' linkBlack arrow>
                      Read Latest Stories
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={`w-full grid gap-12 h-full ${
              showOnly3
                ? 'lg:grid-cols-3'
                : 'grid-cols-[repeat(auto-fit,minmax(350px,1fr))]'
            }`}
          >
            {displayData.map((post, i) => (
              <Link
                href={`/blog/${post.currentSlug}`}
                key={i}
                className='flex flex-col gap-4 cursor-pointer group'
              >
                <div>
                  <div className='border-b pb-8 border-grey30'>
                    <div className='overflow-hidden rounded-2xl'>
                      <Image
                        src={urlFor(post.titleImage).url()}
                        alt={post.title}
                        width={800} // Keep the same high resolution width
                        height={800} // Keep the same high resolution height
                        className='object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300'
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
