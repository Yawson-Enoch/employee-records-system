import styled from 'styled-components';
import { GenericButton } from './GenericButton.styles';

export const StyledEmployeeList = styled.li`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  grid-template-rows: 3rem;
  place-items: center;
  border-bottom: 1px solid var(--grey-500);
  padding: 1rem 0;
  transition: border 0.3s linear;

  &:hover {
    border-bottom: 1px solid var(--clr-accent-primary);
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
