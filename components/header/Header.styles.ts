import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const HeaderWrapper = styled.header`
  display: grid;
  align-content: center;
  border-bottom: 1px solid gray;
`;
export const HeaderContent = styled.div`
  ${Wrapper}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-xs) 0;
`;

export const Logo = styled.p`
  width: fit-content;
  font-size: var(--fs-h2);
  background: linear-gradient(to bottom, hotpink, royalblue);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const ThemeTogglerAndNav = styled.div`
  display: flex;
  gap: var(--gap-lg);
`;

export const ThemeToggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: transparent;

    svg {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
