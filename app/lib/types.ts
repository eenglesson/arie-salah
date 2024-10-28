/* eslint-disable @typescript-eslint/no-explicit-any */
export type simpleBlogCard = {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  badge: string;
  releaseDate: string;
};

export type fullBlog = {
  title: string;
  smallDescription: string;
  content: any;
  titleImage: any;
  badge: string;
  releaseDate: string;
};

export type ButtonProps = {
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
  isActive?: boolean;
};
