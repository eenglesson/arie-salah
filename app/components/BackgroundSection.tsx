// components/BackgroundSection.tsx
import React from 'react';
import Image from 'next/image';

interface BackgroundSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  overlayOpacity?: string;
  className?: string;
}

export default function BackgroundSection({
  children,
  backgroundImage,
  overlayOpacity = 'bg-opacity-50',
  className = '',
}: BackgroundSectionProps) {
  return (
    <section className={`relative w-full ${className}`}>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={backgroundImage}
          alt='Background'
          layout='fill'
          objectFit='cover'
          quality={50} // Adjust quality to reduce image size
          priority // Ensures the image is loaded quickly since it's above the fold
        />
      </div>

      {/* Overlay for darkening the background */}
      <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col justify-between min-h-screen'>
        {children}
      </div>
    </section>
  );
}
