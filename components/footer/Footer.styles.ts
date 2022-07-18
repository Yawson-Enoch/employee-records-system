import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const FooterWrapper = styled.footer`
  display: grid;
  align-content: center;
  border-top: 2px solid var(--grey-500);
`;

export const FooterContent = styled.div`
  ${Wrapper}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-xtra-small) 0;
`;
