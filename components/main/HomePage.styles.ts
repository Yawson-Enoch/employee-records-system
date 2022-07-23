import { motion } from 'framer-motion';
import styled from 'styled-components';
import { slideRight } from '../../animations/animations';
import { Wrapper } from '../../styles/utils';

export const HomepageWrapper = styled.div`
  ${Wrapper}
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
