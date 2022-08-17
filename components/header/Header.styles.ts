import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const StyledHeader = styled.header`
  box-shadow: 0 5px 5px 0 var(--clr-shadow);
`;

export const HeaderContent = styled.div`
  ${Wrapper}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xtra-small) 0;
`;

export const Logo = styled.p`
  width: fit-content;
  font-size: var(--fs-medium);
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const ThemeTogglerAndNav = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-small);
`;
