import { motion } from 'framer-motion';
import styled from 'styled-components';
import { animateAndStaggerChildren, staggeredChild } from '../../animations/animations';
import { Wrapper } from '../../styles/utils';

export const StyledMain = styled.main``;

export const HomepageWrapper = styled(motion.div).attrs(() => {
  return {
    variants: animateAndStaggerChildren,
    initial: 'initial',
    animate: 'animate',
  };
})`
  ${Wrapper}
`;

export const TitlesContainer = styled(motion.ul).attrs(() => {
  return {
    variants: staggeredChild,
  };
})`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  grid-template-rows: 3rem;
  align-items: center;
  justify-items: center;
  gap: var(--space-xtra-small);
  padding: 1rem 0;
  border-radius: var(--radius-medium);
  border: 2px solid var(--grey-500);
  background: var(--gradient-primary);
`;

export const EmployeesData = styled(motion.ul).attrs(() => {
  return {
    variants: staggeredChild,
  };
})`
  margin-top: var(--space-xtra-small);
  display: flex;
  flex-direction: column;
  gap: var(--space-xtra-small);
`;

export const GoToDetailsButton = styled.button`
  background-color: transparent;
  border: 2px solid var(--clr-accent-secondary);
  border-radius: var(--radium-medium);
  padding: 0.3rem 0.5rem;
  height: 3.5rem;
  color: var(--clr-secondary);
`;
