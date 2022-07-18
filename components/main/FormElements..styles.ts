import styled from 'styled-components';

export const FormField = styled.div<{ focused: boolean }>`
  /* display: grid;
grid-template-columns: 1fr 2fr;
grid-auto-rows: 3.5rem; */
  /* transition: all 0.3s; */

  label {
    display: block;
    color: ${({ theme }) => theme.textColor};
    transform: translateY(-2.5rem);
    transform-origin: 0 0;
    transition: transform 0.3s;
    opacity: 0.7;
  }

  input {
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.textColor};
    border-color: ${({ theme }) => theme.textColor};
    box-shadow: none;
    border-radius: 0;
    border-width: 1px;
    border-style: none none solid none;
    transition: border-color 0.3s;
    caret-color: ${({ theme }) => theme.textColor};
    padding-bottom: 0.2rem;
    /* border-radius: var(--radius-xs);
  border: 2px solid blue;
  border: 2px solid blue;
  padding: 0.2rem 0.3rem;
  */
  }

  input::placeholder {
    color: transparent;
  }

  input:focus {
    outline: none;
    border-color: blue;
  }

  input:focus + label {
    color: blue;
    opacity: 1;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translate(-0.05rem, -4.7rem) scale(0.8);
  }

  /* input:focus-within {
  transform: scale(1.02);
} */

  div {
    display: none;
    color: hsl(0, 100%, 30%);
    transform: translateY(-1.5rem);
  }

  input:invalid ~ div {
    display: ${({ focused }) => focused && 'block'};
  }
`;
