import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  input {
    transition: border-color 0.3s;
    caret-color: var(--clr-secondary);
  }

  input:focus {
    outline: none;
    border-color: var(--clr-accent-primary);
  }
`;
