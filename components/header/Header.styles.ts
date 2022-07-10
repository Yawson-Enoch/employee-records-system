import styled from 'styled-components';
import { ContentWrapper } from '../../styles/utils/ContentWrapper';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid;
`;
export const HeaderContent = styled.div`
  ${ContentWrapper}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-lg) 0;
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

export const NavLinks = styled.ul`
  display: flex;
  gap: var(--gap-md);

  a {
    color: var(--blue-400);
    transition: var(--transition-3s);

    &:hover {
      color: var(--blue-300);
    }
  }
`;
