import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GenericButton } from './GenericButton.styles';

export const StyledEmployeeList = styled(motion.li)`
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
`;

export const DeleteButton = styled(GenericButton)`
  color: var(--clr-error);
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3rem;
  }
`;
