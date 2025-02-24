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
  overlayOpacity = '',
  className = '',
}: BackgroundSectionProps) {
  return (
    <section
      className={`relative max-w-5xl h-1/2 bg-cover bg-center-top md:bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      {/* Overlay for darkening the background */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col justify-between min-h-screen'>
        {children}
      </div>
    </section>
  );
}
