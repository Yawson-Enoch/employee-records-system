import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-auto-rows: minmax(7rem, auto);
  align-content: space-between;
  gap: var(--gap-lg);
`;
