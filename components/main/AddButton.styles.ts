import { motion } from 'framer-motion';
import styled from 'styled-components';
import { bumpEffect } from '../../animations/animations';

export const StyledAddButton = styled(motion.button).attrs(() => {
  return {
    variants: bumpEffect,
    whileHover: 'hover',
    whileTap: 'tap',
  };
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  color: var(--clr-secondary);
  width: 7rem;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: var(--radius-round);
  position: fixed;
  bottom: 8rem;
  right: 3rem;
`;
