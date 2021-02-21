import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        min-height: 100vh;
        line-height: 1.6;
        font-family: Poppins;
        display: grid;
        justify-content: center;
        align-items: center;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }
`;

export default GlobalStyles;
