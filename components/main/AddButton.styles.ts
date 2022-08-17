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
  background: var(--gradient-primary);
  color: var(--clr-secondary);
  padding: 0.1rem 3rem;
  height: 3rem;
  border: none;
  border-radius: var(--radius-small);
`;
