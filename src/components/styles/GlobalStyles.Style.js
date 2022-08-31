import styled from "styled-components";

export const GlobalStyle = styled.form`
  box-sizing: border-box;
  letter-spacing: 0.3px;

  img {
    width: 0.875em;
    margin-right: 0.5em;
  }

  button {
    outline: 0;
  }
`;

export const MainStyle = styled`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, sans-serif;
  background-color: #f3f3fe;
  color: #2c3345;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`;
