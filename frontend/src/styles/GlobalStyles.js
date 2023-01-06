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

  body {
    ${({ theme }) => css`
      background: ${theme.colors.secondaryDarkColor};
      color: ${theme.colors.lightColor};
      font-family: ${theme.fonts.primaryFont};
      max-width: 1120px;
      margin: 0 auto;
      padding: 2em;
    `}
  }
`;
