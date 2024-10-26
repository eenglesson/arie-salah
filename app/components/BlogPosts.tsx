import React from 'react';
import { urlFor } from '../lib/sanity';
import { simpleBlogCard } from '../lib/types';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

type BlogPostsProps = {
  data: simpleBlogCard[];
  showOnly3?: boolean;
  showButton?: boolean;
};

export default function BlogPosts({
  data = [],
  showOnly3 = false,
  showButton = false,
}: BlogPostsProps) {
  const displayData = showOnly3 ? data.slice(0, 3) : data;

  return (
    <>
      <section>
        <aside className='w-full pt-[32px] xl:pt-[64px] flex flex-col gap-24'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-6'>
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
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {displayData.map((post, i) => (
              <Link
                href={`/blog/${post.currentSlug}`}
                key={i}
                className='flex flex-col gap-4 justify-between cursor-pointer group'
              >
                <div className='flex flex-col'>
                  <div className='border-b pb-8 border-grey30'>
                    <div className='overflow-hidden rounded-2xl w-full'>
                      <Image
                        src={urlFor(post.titleImage).url()}
                        alt={post.title}
                        width={800}
                        height={800}
                        className='object-cover w-full md:h-[250px]  lg:h-[250px] xl:h-[300px]  group-hover:scale-105 transition-transform duration-300'
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
