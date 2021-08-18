import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
