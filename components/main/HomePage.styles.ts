import { motion } from 'framer-motion';
import styled from 'styled-components';
import { slideRight } from '../../animations/animations';
import { FlowContent, Wrapper } from '../../styles/utils';

export const HomepageWrapper = styled.div`
  ${Wrapper}
  ${FlowContent}
`;

export const SearchAndSortOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-large);

  input,
  select {
    background-color: transparent;
    color: var(--clr-secondary);
    border: var(--border-primary);
    border-radius: var(--radius-small);
    padding: 0.1rem 0.3rem;
  }
`;

export const EmployeesDetails = styled(motion.div).attrs(() => {
  return {
    variants: slideRight,
    initial: 'initial',
    animate: 'animate',
  };
})`
  border: var(--border-primary);
  margin-inline: auto;
  border-radius: var(--radius-small);
`;

export const TitlesContainer = styled(motion.ul)`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  grid-template-rows: 3rem;
  align-items: center;
  justify-items: center;
  gap: var(--space-xtra-small);
  padding: 1rem 0;
`;
