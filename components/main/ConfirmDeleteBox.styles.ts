import { motion } from 'framer-motion';
import styled from 'styled-components';
import { scaleUp } from '../../animations/animations';
import { FlowContent } from '../../styles/utils';
import { GenericButton } from './GenericButton.styles';

export const StyledConfirmDeleteBox = styled(motion.section).attrs(() => {
  return {
    variants: scaleUp,
    initial: 'hide',
    animate: 'show',
    exit: 'hide',
  };
})`
  width: fit-content;
  margin-inline: auto;
  padding-bottom: var(--space-small);
  position: absolute;
  left: 50%;
  top: 50%;
  padding: var(--space-large);
  border-radius: var(--radius-medium);
  z-index: 20;
  background-color: var(--clr-primary);
  border: var(--border-primary);
`;

export const FormContent = styled.div`
  ${FlowContent}
  margin-inline: auto;
`;

export const ButtonsContainer = styled.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-large);

  button {
    width: 8rem;
    text-align: center;
  }
`;

export const NoButton = styled(GenericButton)`
  background-color: var(--blue-500);
  color: var(--clr-white);

  &:focus {
    outline: 2px solid var(--clr-accent-primary);
  }
`;

export const YesButton = styled(GenericButton)`
  background-color: var(--clr-error);
  color: var(--clr-white);
`;
