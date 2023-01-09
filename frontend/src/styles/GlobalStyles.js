import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, select, input {
    font-family: inherit;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.secondaryDarkColor};
      color: ${theme.colors.lightColor};
      font-family: ${theme.fonts.primaryFont};
      min-height: 100vh;
    `}
  }
`;
