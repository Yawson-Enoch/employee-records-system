import styled from 'styled-components';

export const StyledLoader = styled.div`
  align-self: center;
  width: 10rem;
  height: 10rem;
  border-radius: var(--radius-round);
  border-top: 2px solid var(--clr-accent-primary);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  animation: spinner 1s linear infinite;
  margin: var(--space-large) auto;

  &::before {
    content: '';
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: var(--radius-round);
    border-left: 2px dashed var(--clr-accent-secondary);
  }

  @keyframes spinner {
    to {
      transform: rotate(1turn);
    }
  }
`;
