import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #333;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #dddddd;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffd700;
  }
`;
