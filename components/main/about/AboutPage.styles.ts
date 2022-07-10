import styled from 'styled-components';
import { ContentWrapper } from '../../../styles/utils/ContentWrapper';

export const AboutPageWrapper = styled.main`
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

  img {
    object-fit: cover;
    object-position: center;
  }
`;
