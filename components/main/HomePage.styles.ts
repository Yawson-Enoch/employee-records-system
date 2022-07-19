import { motion } from 'framer-motion';
import styled from 'styled-components';
import { bumpEffect, scaleDown } from '../../animations/animations';
import { Wrapper } from '../../styles/utils';

export const StyledMain = styled.main``;

export const HomepageWrapper = styled.div`
  ${Wrapper}
  border: 1px solid yellow;
`;

export const TitlesContainer = styled.ul`
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
    variants: scaleDown,
    initial: 'initial',
    animate: 'animate',
  };
})`
  margin-top: var(--space-xtra-small);
  display: flex;
  flex-direction: column;
  gap: var(--space-xtra-small);

  li {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
    grid-template-rows: 3rem;
    align-items: center;
    justify-items: center;
    gap: var(--space-xtra-small);
    border: 2px solid var(--grey-500);
    padding: 1rem 0;
    border-radius: var(--radius-medium);
    transition: border 0.3s linear;

    &:hover {
      border: 2px solid var(--clr-accent-secondary);
    }
  }
`;

export const GoToDetailsButton = styled.button`
  background-color: transparent;
  border: 2px solid var(--clr-accent-secondary);
  border-radius: var(--radium-medium);
  padding: 0.3rem 0.5rem;
  height: 3.5rem;
  color: var(--clr-secondary);
`;
export const DeleteButton = styled(motion.button).attrs(() => {
  return {
    variants: bumpEffect,
    whileHover: 'hover',
    whileTap: 'tap',
  };
})`
  background-color: transparent;
  color: var(--clr-error);
  border: 2px solid var(--clr-error);
  height: 3.5rem;
  padding: 0.3rem 1.5rem;
  border-radius: var(--radius-medium);
  display: flex;
  justify-content: center;
  align-items: center;
`;
