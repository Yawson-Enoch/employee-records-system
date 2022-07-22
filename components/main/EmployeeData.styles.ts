import { motion } from 'framer-motion';
import styled from 'styled-components';
import { slideRight } from '../../animations/animations';

export const StyledEmployeesData = styled(motion.ul).attrs(() => {
  return {
    variants: slideRight,
    initial: 'initial',
    animate: 'animate',
  };
})`
  border-right: var(--border-secondary);
  border-left: var(--border-secondary);
  border-bottom: var(--border-secondary);
`;
