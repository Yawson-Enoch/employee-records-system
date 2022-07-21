export const scaleUp = {
  hide: {
    translateX: 0,
    translateY: 0,
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
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

export const scaleDown = {
  initial: {
    y: -15,
    opacity: 0,
    scale: 0.5,
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

export const animateAndStaggerChildren = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

export const staggeredChild = {
  initial: {
    y: -15,
    x: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
  },
};

export const addButtonAnimation = {
  initial: {
    x: 300,
    scale: 0.5,
  },
  animate: {
    x: 0,
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};
