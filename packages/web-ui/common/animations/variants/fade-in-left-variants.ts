import { Variants } from 'framer-motion';

export const fadeInLeftVariants: Variants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const fadeInLeftKeys = {
  initial: 'initial',
  animate: 'animate',
};
