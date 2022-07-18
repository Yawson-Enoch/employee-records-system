import styled from 'styled-components';
import { FlowContent } from '../../styles/utils';

export const FormContainer = styled.section`
  width: 50%;
  margin-inline: auto;
  padding-bottom: var(--space-small);
  position: absolute;
  left: 50%;
  top: 50%;
  padding: var(--space-medium);
  border-radius: var(--radius-medium);
  transform: translate(-50%, -50%);
  z-index: 20;
  background-color: var(--clr-primary);
  border: 2px solid var(--grey-500);
`;

export const FormContainerDetails = styled.div`
  margin-bottom: var(--space-large);
  p {
    font-size: var(--fs-large);
  }
`;
export const Form = styled.form`
  ${FlowContent}
`;

export const FormBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: var(--space-small);

  button {
    outline: none;
    background-color: transparent;
    border-radius: var(--radius-medium);
    padding: 0.5rem 1rem;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 0.7;
    }
  }

  button[type='submit'] {
    border: 2px solid var(--blue-500);
    color: var(--blue-500);
  }

  button:nth-of-type(1) {
    border: 2px solid var(--clr-error);
    color: var(--clr-error);
  }
`;
