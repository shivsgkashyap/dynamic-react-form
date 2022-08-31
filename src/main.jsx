import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MainStyle } from "./components/styles/GlobalStyles.Style";

ReactDOM.render(
  <React.StrictMode>
    <MainStyle>
      <App />
    </MainStyle>
  </React.StrictMode>,
  document.getElementById("root")
);
