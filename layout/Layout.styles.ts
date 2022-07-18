import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-auto-rows: minmax(5rem, auto);
  align-content: space-between;
  gap: var(--space-large);
`;
