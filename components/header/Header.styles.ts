import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const StyledHeader = styled.header`
  display: grid;
  align-content: center;
  border-bottom: var(--border-primary);
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
  display: flex;
  gap: var(--space-large);
`;
