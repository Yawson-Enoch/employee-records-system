import styled from 'styled-components';
import { ContentWrapper } from '../../../styles/utils/ContentWrapper';

export const FormPageWrapper = styled.main`
  ${ContentWrapper}
`;
export const UserForm = styled.form`
  ${ContentWrapper}
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);

  button {
    width: fit-content;
    cursor: pointer;
    padding: 0.3rem 0.7rem;
    border-radius: var(--radius-md);
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    border: 2px solid ${({ theme }) => theme.textColor};
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);

  input {
    border-radius: var(--radius-xs);
    background-color: transparent;
    border: 2px solid gray;
    color: ${({ theme }) => theme.textColor};
    padding: 0.2rem;
  }
`;
