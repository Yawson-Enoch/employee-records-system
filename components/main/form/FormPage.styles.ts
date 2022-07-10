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
    color: ${({ theme }) => theme.bgColor};
    padding: 0.2rem;
  }
`;
