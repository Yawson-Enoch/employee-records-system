import styled from 'styled-components';
import { FlowContent } from '../../styles/utils';

export const FormContainer = styled.section`
  width: 50%;
  margin-inline: auto;
  padding-bottom: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: var(--gap-md);
  border-radius: var(--radius-xs);
  transform: translate(-50%, -50%);
  z-index: 20;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const FormContainerDetails = styled.div`
  margin-bottom: 3rem;
  p {
    font-size: var(--fs-h1);
  }
`;
export const Form = styled.form`
  ${FlowContent}
`;

export const FormBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;

  button[type='submit'] {
    border: 2px solid blue;
    outline: none;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: blue;
    border-radius: var(--radius-md);
    cursor: pointer;
    /* color: ${({ theme }) => theme.textColor}; */
  }

  button:nth-of-type(1) {
    border: 2px solid hsl(0, 100%, 50%);
    outline: none;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border-radius: var(--radius-md);
    cursor: pointer;
    color: hsl(0, 100%, 50%);
  }
`;
