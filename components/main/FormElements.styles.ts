import styled from 'styled-components';

export const FormField = styled.div`
  label {
    display: block;
    color: var(--clr-secondary);
    transform: translateY(-2.5rem);
    transform-origin: 0 0;
    transition: transform 0.3s;
    opacity: 0.7;
  }

  input {
    width: 100%;
    background-color: transparent;
    color: var(--clr-secondary);
    border-color: var(--grey-500);
    box-shadow: none;
    border-radius: 0;
    border-width: 1px;
    border-style: none none solid none;
    transition: border-color 0.3s;
    caret-color: var(--clr-secondary);
    padding-bottom: 0.2rem;
  }

  input::placeholder {
    color: transparent;
  }

  input:focus {
    outline: none;
    border-color: var(--blue-500);
  }

  input:focus + label {
    color: var(--blue-500);
    opacity: 1;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translate(-0.05rem, -4.7rem) scale(0.8);
  }

  div {
    opacity: 0;
    pointer-events: none;
    color: var(--clr-error);
    transform: translateY(-1.5rem);
    font-size: 1.5rem;
  }

  input:invalid:not(:placeholder-shown) {
    border-color: var(--clr-error);
    ~ div {
      pointer-events: all;
      opacity: 1;
    }
  }
`;
