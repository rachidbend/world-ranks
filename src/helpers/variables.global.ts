import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --color-blue-100: #4e80ee;

    --color-grey-100: #1b1d1f;
    --color-grey-200: #282b30;
    --color-grey-300: #6c727f;
    --color-grey-400: #d2d5da;

    --font-main: 'Be Vietnam Pro', sans-serif;
  }

  html {
    font-size: 62.5%;
  }
`;
