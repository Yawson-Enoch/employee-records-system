import { motion } from 'framer-motion';
import styled from 'styled-components';
import { scaleDown } from '../../animations/animations';

export const StyledErrorMessageBox = styled(motion.section).attrs(() => {
  return {
    variants: scaleDown,
    initial: 'initial',
    animate: 'animate',
    exit: 'initial',
  };
})`
  position: absolute;
  inset: 0 0 auto;
  z-index: 20;
  width: 80%;
  margin-inline: auto;
  padding: var(--space-large);
  background-color: var(--clr-primary);
  border: var(--border-primary);
  border-radius: var(--radius-medium);

  p {
    text-align: center;
    color: var(--clr-error);
  }
`;
