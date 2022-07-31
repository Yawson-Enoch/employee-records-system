import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* pt-serif */
@font-face {
	font-family: 'PT Serif';
	font-style: normal;
	font-weight: 400;
	src: local("PT Serif"), local("PTSerif-Regular"), url('/fonts/pt-serif/pt-serif.woff') format("woff");
	font-display: fallback;
}
/* pt-serif-italic */
@font-face {
	font-family: 'PT Serif';
	font-style: italic;
	font-weight: 400;
	src: local("PT Serif Italic"), local("PTSerif-Italic"), url('/fonts/pt-serif/pt-serif-italic.woff') format("woff");
	font-display: fallback;
}

/* poppins-bold */
@font-face {
	font-family: Poppins;
	font-style: normal;
	font-weight: 700;
	src: local("Poppins Bold"), local("Poppins-Bold"), url('/fonts/poppins/poppins-bold.woff') format("woff");
	font-display: fallback;
}
/* poppins-bold-italic */
@font-face {
	font-family: Poppins;
	font-style: italic;
	font-weight: 700;
	src: local("Poppins Bold Italic"), local("Poppins-BoldItalic"), url('/fonts/poppins/poppins-bold-italic.woff') format("woff");
	font-display: fallback;
}

:root {
  // colors
  // blue
  --blue-100: #ccccff;
  --blue-200: #9999ff;
  --blue-300: #6666ff;
  --blue-400: #3333ff;
  --blue-500: #0000ff;
  --blue-600: #0000cc;
  --blue-700: #000099;
  --blue-800: #000066;
  --blue-900: #000033;

  // grey
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;

  // rest of the colors
  --clr-black: #000000;
  --clr-white: #ffffff;
  --clr-error: #cc0000;
  --clr-success: #005a00;
  --clr-backdrop: rgba(0, 0, 0, 0.7);
  --clr-accent-primary:  #88528F;
  --clr-accent-secondary: #06969a;
  --gradient-primary: linear-gradient(
    45deg,
    var(--clr-accent-primary),
    var(--clr-accent-secondary)
  );

  // fonts
  /* font family */
  --ff-heading: 'Poppins', sans-serif;
  --ff-body: 'PT Serif', serif;

  /* font size */
  --fs-large: clamp(2.2rem, 1.4rem + 1.4vw, 2.6rem);
  --fs-medium: clamp(1.6rem, 1.2rem + 1.2vw, 2rem);
  --fs-small: clamp(1.4rem, 0.7rem + 0.7vw, 1.8rem);
  --fs-xtra-small: clamp(0.8rem, 0.5rem + 0.5vw, 1.2rem);

  // page-specific variables
  --radius-xtra-small: 0.2rem;
  --radius-small: 0.5rem;
  --radius-medium: 1rem;
  --radius-large: 1.5rem;
  --radius-round: 50%;
  --space-xtra-small: var(--fs-xtra-small);
  --space-small: var(--fs-small);
  --space-medium: var(--fs-medium);
  --space-large: var(--fs-large);
  --max-width: 1024px;
  --transition-3s: 0.3s ease-in-out;
  --transition-5s: 0.5s ease-in-out;
  --border-secondary: 1px solid var(--grey-500);
}

body[data-theme='light'] {
  --clr-primary: var(--grey-300);
  --clr-secondary: var(--grey-800);
  --clr-accent-tertiary: rgb(212, 228, 250);
  --clr-shadow: rgba(0, 0, 0, 0.15);
  --border-primary: 2px solid rgba(0, 0, 0, 0.15);
  --box-shadow-outside: 4px 4px 4px var(--grey-200),
  -4px -4px 4px var(--grey-400);
  --box-shadow-inside: inset 4px 4px 4px var(--grey-200),
  inset -4px -4px 4px var(--grey-400);
}

body[data-theme='dark'] {
  --clr-primary: #01040e;
  --clr-secondary: var(--grey-400);
  --clr-accent-tertiary: rgb(1, 5, 15);
  --clr-shadow: rgba(255, 255, 255, 0.03);
  --border-primary: 2px solid rgba(255, 255, 255, 0.07);
  --box-shadow-outside: 4px 4px 4px var(--clr-black),
    -4px -4px 4px var(--grey-900);
  --box-shadow-inside: inset 4px 4px 4px var(--clr-black),
    inset -4px -4px 4px var(--grey-900);
}

html {
  font-size: 62.5%;
  scroll-padding-top: 2rem;

  &:focus-within {
    scroll-behavior: smooth;
  }

  @media (max-width: 300px) {
    font-size: 50%;
  }

  @media (max-width: 150px) {
    font-size: 30%;
  }
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: none;
  border: none;
}

:focus-visible {
  outline: 1px solid var(--clr-accent-primary);
}

body {
  font-family: var(--ff-body);
  font-size: var(--fs-small);
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  min-height: 100vh;
  overflow-x: hidden;
}

p {
  line-height: 1.4;
}

:where(h1, h2, h3, h4, h5, h6) {
  font-family: var(--ff-heading);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
}

:where(input, textarea, select, label, button) {
  font: inherit;
  cursor: pointer;
}

img,
picture, 
svg {
  display: block;
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  display: block;
  text-decoration: none;
}

h1 {
  font-size: var(--fs-large);
}

h2 {
  font-size: var(--fs-medium);
}

p,
a {
  font-size: var(--fs-small);
}
`;
