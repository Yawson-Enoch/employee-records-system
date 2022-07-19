import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  > * {
    border: 1px solid red;
  }

  min-height: 100vh;
  display: grid;
  grid-auto-rows: 5rem auto 5rem;
  gap: var(--space-large);
`;
