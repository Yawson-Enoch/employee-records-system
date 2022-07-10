import styled from 'styled-components';
import { ContentWrapper } from '../../styles/utils/ContentWrapper';

export const FooterWrapper = styled.footer`
  border-top: 1px solid;
`;

export const FooterContent = styled.div`
  ${ContentWrapper}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--gap-lg) 0;
`;
