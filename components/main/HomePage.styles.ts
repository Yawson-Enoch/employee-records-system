import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const HomepageWrapper = styled.div`
  ${Wrapper}
`;

export const TitlesContainer = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: var(--space-xtra-small);
  padding: 1rem 0;
  border-radius: var(--radius-medium);
  border: 2px solid var(--grey-500);
  background: var(--gradient-primary);
`;

export const EmployeesData = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: var(--space-xtra-small);

  li {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: var(--space-small);
    border: 2px solid var(--grey-500);
    padding: 1rem 0;
    border-radius: var(--radius-medium);
    transition: border 0.3s linear;

    &:hover {
      border: 2px solid var(--clr-accent-secondary);
    }
  }
`;

export const GoToDetailsButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--clr-accent-secondary);
  border-radius: var(--radium-medium);
  padding: 0.3rem 0.5rem;
  height: 3.5rem;
  color: var(--clr-secondary);
`;
export const DeleteButton = styled.button`
  background-color: transparent;
  color: var(--clr-error);
  border: 2px solid var(--clr-error);
  height: 3.5rem;
  padding: 0.3rem 1.5rem;
  border-radius: var(--radius-medium);
  display: flex;
  justify-content: center;
  align-items: center;
`;
