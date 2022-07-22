import { motion } from 'framer-motion';
import styled from 'styled-components';
import { scaleUp } from '../../animations/animations';
import { FlowContent } from '../../styles/utils';
import { GenericButton } from './GenericButton.styles';

export const FormContainer = styled(motion.section).attrs(() => {
  return {
    variants: scaleUp,
    initial: 'hide',
    animate: 'show',
    exit: 'hide',
  };
})`
  width: 50%;
  margin-inline: auto;
  padding-bottom: var(--space-small);
  position: absolute;
  left: 50%;
  top: 50%;
  padding: var(--space-medium);
  border-radius: var(--radius-medium);
  z-index: 20;
  background-color: var(--clr-primary);
  border: var(--border-primary);
`;

export const FormContainerDetails = styled.div`
  margin-bottom: var(--space-large);
  p {
    font-size: var(--fs-large);
    text-align: center;
  }
`;

export const Form = styled.form`
  ${FlowContent}
`;

export const FormBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: var(--space-small);
`;

export const CloseButton = styled(GenericButton)`
  background-color: var(--clr-error);
  color: var(--clr-white);
`;

export const SubmitButton = styled(GenericButton)`
  background-color: var(--blue-500);
  color: var(--clr-white);
`;
