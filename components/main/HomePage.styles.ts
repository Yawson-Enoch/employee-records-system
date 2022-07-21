import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const StyledMain = styled.main``;

export const HomepageWrapper = styled(motion.div)`
  ${Wrapper}
`;

export const TitlesContainer = styled(motion.ul)`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  grid-template-rows: 3rem;
  align-items: center;
  justify-items: center;
  gap: var(--space-xtra-small);
  padding: 1rem 0;
  border-radius: var(--radius-medium);
  background-color: var(--clr-accent-primary);
`;

export const GoToDetailsButton = styled.button`
  background-color: transparent;
  border: 2px solid var(--clr-accent-secondary);
  border-radius: var(--radium-medium);
  padding: 0.3rem 0.5rem;
  height: 3.5rem;
  color: var(--clr-secondary);
`;
