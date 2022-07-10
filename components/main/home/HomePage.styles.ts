import styled from 'styled-components';
import { ContentWrapper } from '../../../styles/utils/ContentWrapper';

export const HomePageWrapper = styled.main`
  ${ContentWrapper}
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);

  h1 {
    text-align: center;
  }

  p {
    text-align: justify;
  }
`;

export const Test = styled.p<{ addColor: string }>`
  color: ${({ addColor, theme }) =>
    addColor === 'hotpink' ? theme.secondaryColor : theme.tertiaryColor};
  cursor: pointer;
`;
