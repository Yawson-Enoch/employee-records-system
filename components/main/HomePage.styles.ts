import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const HomepageWrapper = styled.div`
  ${Wrapper}
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TitlesContainer = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: var(--gap-md);
  padding: 1rem;
  border-radius: var(--radius-md);
  background-color: blue;
`;

export const EmployeesData = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: var(--gap-md);
    /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
    border: 1px solid ${({ theme }) => theme.textColor};
    padding: 1rem;
    border-radius: var(--radius-md);

    &:hover {
      border: 1px solid blueviolet;
    }
  }
`;

export const GoToDetailsButton = styled.button`
  background-color: transparent;
  border: 1px solid blueviolet;
  border-radius: 7px;
  padding: 0.3rem 0.5rem;
  height: 3.5rem;
  color: ${({ theme }) => theme.textColor};
`;
export const DeleteButton = styled.button`
  background-color: transparent;
  color: red;
  border: 1px solid red;
  height: 3.5rem;
  padding: 0.3rem 3rem;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
