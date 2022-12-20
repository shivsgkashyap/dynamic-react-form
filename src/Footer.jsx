import React from "react";
import github from "./images/github.png";
import { FooterStyle } from "./components/styles/Form.Style";

export default function Footer() {
  return (
    <FooterStyle>
      <p>Copyright © {new Date().getFullYear()} Shiv Kashyap</p>
      <a href="https://github.com/shivsgkashyap" target="_blank">
        <img src={github} alt="Github Logo" />
      </a>
    </FooterStyle>
  );
}
