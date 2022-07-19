export const scaleUp = {
  hide: {
    translateX: '-30%',
    translateY: '-30%',
    scale: 0.5,
    opacity: 0,
  },
  show: {
    translateX: '-50%',
    translateY: '-50%',
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 10,
    },
  },
};

export const bumpEffect = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.9,
  },
};

export const scaleDown = {
  initial: {
    y: -15,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};
