import styled from 'styled-components';
import { FlowContent } from '../../styles/utils';

export const FormContainer = styled.section`
  width: 50%;
  margin-inline: auto;
  padding-bottom: 3rem;
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

  button:first-of-type {
    border: 2px solid blue;
    outline: none;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border-radius: var(--radius-md);
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
  }
`;
