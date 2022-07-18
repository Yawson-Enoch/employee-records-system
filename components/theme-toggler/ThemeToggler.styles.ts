import styled from 'styled-components';

export const StyledThemeToggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: transparent;

    svg {
      color: var(--clr-secondary);
    }
  }
`;
