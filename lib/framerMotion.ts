export const fadeInAnimationVariantsRight = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      stiffness: 60,
      damping: 20,
    },
  },
};
export const fadeInAnimationVariantsBottom = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      stiffness: 60,
      damping: 20,
    },
  },
};
