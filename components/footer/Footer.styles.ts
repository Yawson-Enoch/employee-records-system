import styled from 'styled-components';
import { Wrapper } from '../../styles/utils';

export const FooterWrapper = styled.footer`
  display: grid;
  align-content: center;
  border-top: 1px solid gray;
`;

export const FooterContent = styled.div`
  ${Wrapper}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--gap-xs) 0;
`;
