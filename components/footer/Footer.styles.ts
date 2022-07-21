import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const StyledFooter = styled.footer`
  display: grid;
  align-content: center;
  border-top: var(--border-primary);
`;

export const FooterContent = styled.div`
  ${Wrapper}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-xtra-small) 0;
`;
