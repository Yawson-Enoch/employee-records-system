import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PageModal = styled(motion.div).attrs(() => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
})`
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: var(--clr-backdrop);
`;
