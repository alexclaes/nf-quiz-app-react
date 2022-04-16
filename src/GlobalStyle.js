import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --primary: #0397b8;
  --primary-light: #b8ddf4;
  --secondary: #f2b705;
  --secondary-light: #f2f5e4;
  --white: #ecf8f8;
  --black: #211103;

  --ff-primary: sans-serif;
  --ff-serif: serif;

  --fs-200: 0.75rem;
  --fs-300: 1rem;
  --fs-400: 1.25rem;
  --fs-500: 1.375rem;
  --fs-600: 1.75rem;
  --fs-900: 2.125rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

body,
h1,
h2,
h3,
p {
  margin: 0;
}

body {
  line-height: 1.5;
  font-size: var(--fs-400);
  font-family: var(--ff-primary);
  color: var(--black);
}

button {
  font-size: var(--fs-400);
  font-family: var(--ff-primary);
  color: var(--black);
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li,
ol li {
  list-style: none;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
`;

export default GlobalStyle;
