import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        line-height: 1.6;
        font-family: Poppins;
        display: grid;
        justify-content: center;
        align-items: center;
    }

    /* Make images easier to work with */
    /* img,
    picture {
        max-width: 100%;
        display: block;
    } */

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
`;

export default GlobalStyles;
