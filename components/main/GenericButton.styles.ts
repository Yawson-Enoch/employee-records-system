import { motion } from 'framer-motion';
import styled from 'styled-components';
import { bumpEffect } from '../../animations/animations';

export const GenericButton = styled(motion.button).attrs(() => {
  return {
    variants: bumpEffect,
    whileHover: 'hover',
    whileTap: 'tap',
  };
})`
  background-color: transparent;
  color: inherit;
  border: none;
  border-radius: var(--radius-medium);
  padding: 0.5rem 1rem;
`;
