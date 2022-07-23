import styled from 'styled-components';
import { GenericButton } from './GenericButton.styles';

export const StyledEmployeeList = styled.li`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  grid-template-rows: 3rem;
  place-items: center;
  padding: 1rem 0;
  transition: border 0.3s linear;
  border-top: var(--border-primary);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: var(--space-xtra-small);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    padding: 0;
  }
`;

export const EditButton = styled(GenericButton)`
  color: var(--clr-accent-secondary);
`;

export const DeleteButton = styled(GenericButton)`
  color: var(--clr-error);
`;
