import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./components/styles/GlobalStyles.Style";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <GlobalStyle />
    <App />
    <Footer />
  </React.Fragment>
);
