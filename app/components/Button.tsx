'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  bigButton?: boolean;
  arrow?: boolean;
  black?: boolean;
  green?: boolean;
  yellow?: boolean;
  link?: boolean;
  linkBlack?: boolean;
};

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
}: ButtonProps) {
  const router = useRouter();

  const sizeClass = bigButton
    ? 'py-4 px-8'
    : link
    ? 'p-0'
    : linkBlack
    ? 'p-0'
    : 'py-2 px-5';

  const colorClass = black
    ? 'bg-grey05 text-primaryBlack hover:bg-primaryWhite hover:border-primaryBlack'
    : green
    ? 'bg-white text-primaryBlack hover:bg-primaryWhite hover:border-primaryBlack'
    : yellow
    ? 'bg-secondaryYellow text-primaryBlack hover:bg-primaryWhite border-secondaryYellow hover:border-primaryWhite'
    : link
    ? 'bg-transparent text-primaryWhite border-none'
    : linkBlack
    ? 'bg-transparent text-primaryBlack border-none'
    : 'bg-transparent text-primaryWhite hover:bg-white hover:text-primaryBlack border-white';

  const handleClick = () => {
    if (to) {
      router.push(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`group flex text-bodyDefault font-light items-center gap-2 w-fit h-fit rounded-[64px] border-[0.5px] duration-300
    ${sizeClass} ${colorClass}`}
      onClick={handleClick}
    >
      {children}
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
