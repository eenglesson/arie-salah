// components/BackgroundSection.tsx
import React from 'react';

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
    <section
      className={`relative w-full bg-cover bg-center-top md:bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      {/* Overlay for darkening the background */}
      <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col justify-between min-h-screen'>
        {children}
      </div>
    </section>
  );
}
