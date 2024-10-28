'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { ButtonProps } from '../lib/types';

interface ExtendedButtonProps extends ButtonProps {
  isActive?: boolean; // Added isActive to indicate if the button is for the current page
}

function Button({
  children,
  onClick,
  to,
  bigButton,
  arrow,
  black,
  green,
  yellow,
  link,
  linkBlack,
  isActive,
}: ExtendedButtonProps) {
  const router = useRouter();

  const sizeClass = bigButton
    ? 'py-4 px-8'
    : link || linkBlack
      ? 'p-0'
      : 'py-2 px-5';

  const colorClass = black
    ? 'bg-grey05 text-primaryBlack hover:bg-primaryWhite hover:border-primaryBlack'
    : green
      ? 'bg-white text-primaryBlack hover:bg-primaryWhite hover:border-primaryBlack'
      : yellow
        ? 'bg-secondaryYellow text-primaryBlack hover:bg-primaryWhite border-secondaryYellow hover:border-primaryWhite'
        : link || linkBlack
          ? 'bg-transparent border-none group relative'
          : 'bg-transparent text-primaryWhite hover:bg-white hover:text-primaryBlack border-white';

  const textColor = link
    ? 'text-primaryWhite'
    : linkBlack
      ? 'text-primaryBlack'
      : '';

  const handleClick = () => {
    if (onClick) {
      onClick(); // Always execute onClick if provided
    }

    if (to) {
      router.push(to); // Then navigate if a route is provided
    }
  };

  return (
    <button
      className={`group flex text-bodyDefault font-light items-center gap-2 w-fit h-fit rounded-[32px] border-[1px] duration-300
    ${sizeClass} ${colorClass} ${textColor}`}
      onClick={handleClick}
    >
      <span className='relative'>
        {children}
        {(link || linkBlack) && (
          <span
            className={`absolute left-0 -bottom-0.5 w-full h-[1px] ${
              isActive
                ? linkBlack
                  ? 'bg-white'
                  : 'bg-white'
                : linkBlack
                  ? 'bg-primaryBlack transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'
                  : 'bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'
            }`}
            style={isActive ? { transform: 'scaleX(1)' } : {}}
          />
        )}
      </span>
      {arrow && (
        <ArrowUpRight
          size={20}
          className='transition-transform duration-300 group-hover:rotate-45'
        />
      )}
    </button>
  );
}

export default Button;
