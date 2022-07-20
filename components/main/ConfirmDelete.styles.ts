import { motion } from 'framer-motion';
import styled from 'styled-components';
import { scaleUp } from '../../animations/animations';
import { FlowContent } from '../../styles/utils';
import { GenericButton } from './GenericButton.styles';

export const ConfirmDeleteBox = styled(motion.section).attrs(() => {
  return {
    variants: scaleUp,
    initial: 'hide',
    animate: 'show',
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
  border: 2px solid var(--grey-500);
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
  gap: var(--space-small);
`;

export const NoButton = styled(GenericButton)`
  background-color: var(--blue-500);
  color: var(--blue-gray-100);
  width: 8rem;
  border: 2px solid var(--blue-500);
  text-align: center;
`;

export const YesButton = styled(GenericButton)`
  background-color: var(--clr-error);
  color: var(--gray-100);
  width: 8rem;
  text-align: center;
  border: 2px solid var(--clr-error);
`;
