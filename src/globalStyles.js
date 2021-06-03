import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,*::before,*::after {
    box-sizing: border-box;
  }
 
  body {
    font-family: sans-serif;
    overflow: hidden;
  }
`;
