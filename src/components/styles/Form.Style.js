import styled from "styled-components";

export const GlobalFormStyle = styled.form`
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

export const FormAll = styled.div`
  border-radius: 3px;
  box-shadow: 0 4px 4px rgb(87 100 126 / 21%);
  background-color: #fff;
  max-width: 752px;
  display: flex;
  flex-direction: column;
  margin: 72px auto;
  width: 100%;
  align-items: flex-start;
  padding: 0 38px;
  list-style: none;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    margin: 0 !important;
    padding: 0 !important;
  }

  @media screen and (max-width: 768px) {
    max-width: inherit !important;
    margin: 0 !important;
    padding: 0 14px !important;
  }
`;

export const HeaderStyle = styled.header`
  width: 100%;

  @media screen and (max-width: 480px) {
    margin: 0 !important;
    padding: 28px 14px !important;
  }
  @media screen and (max-width: 768px) {
    margin: 0 -14px;
    padding: 28px;
  }

  .form-header {
    margin: 0 -38px;
    padding: 2.5em 2.5em;
    border-color: #d7d8e1;
    border-bottom: 1px solid #d7d8e1;

    .form-header-text {
      margin-bottom: auto;
      margin-top: auto;
      line-height: 1.45;
      letter-spacing: 0.3px;
      font-size: 1.94em;
    }
  }
`;

export const SubmitButton = styled.section`
  width: 100%;

  .form-buttons-wrapper {
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 10px -38px 10px;
    padding: 30px 52px;
    border-top: 1px solid #e5e7f2;

    @media screen and (max-width: 480px) {
      padding: 30px 14px !important;
      margin: 0 !important;
    }

    @media screen and (max-width: 768px) {
      margin: 0 -14px !important;
      padding: 30px 14px !important;
      flex-wrap: nowrap !important;
    }

    .form-submit-button {
      background-color: #18bd5b;
      border-color: #18bd5b;
      color: #fff;
      width: auto;
      min-width: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3em;
      font-size: 1em;
      border-radius: 4px;
      border: 1px solid;
      cursor: pointer;
      font-weight: 500;

      @media screen and (max-width: 480px) {
        width: 100% !important;
        margin-left: 0 !important;
        justify-content: center !important;
        min-width: 100px !important;
      }
    }
  }
`;

export const FormLabelStyle = styled.label`
  color: #2c3345;
  display: inline-block;
  font-size: 16px;
  word-break: break-word;
  width: 100%;
  margin-left: 2px;
  margin-bottom: 14px;
  font-weight: 550;

  .form-required {
    color: #f23a3c;
    margin-left: 4px;
  }
`;

export const FormLineStyle = styled.section`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 12px 10px;
  margin: 29px 4px 0px;
  border-radius: 3px;
  position: relative;
  width: 100%;
  transition: background-color 0.15s;
  background-color: ${(props) => props.bg};
`;

export const InputField = styled.div`
  input {
    width: 100%;
    outline: none;
    margin: 0;
    text-align: left;
    font-size: 1em;
    border-radius: 4px;
    padding: 0 0.625em;
    height: 2.5em;
    border: ${(props) =>
      props.border ? "1px solid red" : "1px solid #b8bdc9"};

    &:hover {
      border: ${(props) =>
        props.border ? "1.5px solid red" : "1.5px solid blue"};
    }
  }
`;

export const UserInput = styled.div`
  width: 100%;
  outline: none;
  margin: 0;
  text-align: left;
  font-size: 1em;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 2em;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    .form-sub-label-container {
      flex: 1 1 auto !important;
    }
  }

  @media screen and (max-width: 480px) {
    .sub-label-media {
      margin-left: 8px;
    }
  }

  .form-sub-label-container {
    vertical-align: top;
    min-width: 0;
    flex: 0 1 100%;
  }

  @media screen and (max-width: 480px) {
    input {
      width: 100% !important;
    }
  }

  .form-sub-label {
    min-height: 13px;
    color: #57647e;
    font-size: 0.75em;
    margin-top: 11px;
    margin-left: 2px;
    display: block;
    word-break: break-word;
  }

  .suggestions-input {
    width: 100%;
  }

  .hear-dropdown,
  .textarea-input {
    min-width: 100%;
    max-width: 100%;
    height: 2.5em;
    background-color: #fff;
    border-color: #b8bdc9;
    color: #2c3345;
    font-size: 1em;
    border-radius: 4px;
    padding: 0.5em;
    outline: none;
  }

  .textarea-input {
    height: 163px;
  }

  .recommend-input {
    width: 100%;
  }

  .form-checkboxes {
    width: 100%;
  }

  .form-checkbox {
    flex: 0 1 5%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px),
    screen and (max-device-width: 768px) and (orientation: portrait),
    screen and (max-device-width: 415px) and (orientation: landscape) {
    .form-label-ref {
      padding-right: 4px !important;
    }
  }

  .form-label-ref {
    width: 100%;
    margin-left: 2px;
    margin-bottom: 14px;
    font-weight: 550;
    color: #2c3345;
    display: inline-block;
    font-size: 16px;
    word-break: break-word;
  }

  @media screen and (max-width: 480px) {
    .form-matrix-table {
      width: 100% !important;
    }
  }

  .form-matrix-table {
    display: grid;
    grid-template-columns: 10% 25% 25% 40%;
    width: 100%;
    margin-top: 1em;
  }

  .form-matrix-values {
    border-left: 1px solid #c3cad8;
    border-bottom: 1px solid #c3cad8;
    position: relative;
  }

  .top-style {
    text-align: center;
    border-top: 1px solid #c3cad8;
    background-color: #e5eaf4;
    font-size: 0.75em;
    font-weight: 500;
    padding: 12px;
  }

  .first-style {
    border-radius: 4px 0 0;
  }

  .end-style {
    border-right: 1px solid #c3cad8;
  }

  .top-style.end-style {
    border-radius: 0 4px 0;
  }

  .bottom-style.end-style {
    border-radius: 0 0 4px;
  }

  .small-top {
    visibility: hidden;
  }

  .small-top,
  .small-middle,
  .small-bottom {
    background-color: #e5eaf4;
    font-size: 0.75em;
    font-weight: 500;
    padding: 12px;
  }

  .small-bottom {
    border-radius: 0 0 0 4px;
  }

  .form-textbox {
    font-size: 1em;
    min-width: 100%;
    outline: none;
    margin: 0;
    text-align: left;
    padding: 0 0.625em;
    height: 2.5em;
    border: 1px solid #fff;
  }

  .form-error-message {
    color: #fff;
    background-color: #f23a3c;
    font-size: 0.75em;
    margin-top: 8px;
    border-radius: 4px;
    display: inline-block;
    padding: 0.25em 0.5em 0.25em 0.5em;
  }
`;

export const ErrorBanner = styled.div`
  animation-name: fadeIn;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  width: 100%;
  position: fixed;
  transition: 0.3s;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: ${(props) =>
    props.errorCounter
      ? "rgba(242, 58, 60, 0.94)"
      : "rgba(201, 251, 203, 0.95)"};
  color: ${(props) => (props.errorCounter ? "#fff" : "#2c3345")};
  visibility: ${(props) =>
    props.errorMessageVisibility ? "visible" : "hidden"};

  .error-navigation-inner {
    max-width: 752px;
    background-position: 0;
    display: flex;
    padding: 10px;
    align-items: center;
    transition-property: background-color, background-size, background-position,
      padding;
    transition-duration: 0.2s;
    margin: 0 auto;

    .error-navigation-message {
      flex: 1;
      display: ${(props) => (props.errorCounter ? "block" : "none")};
    }

    strong {
      background-color: #fff;
      color: #2c3345;
      font-size: 14px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 20px;
    }

    .error-navigation-message-2 {
      flex: 1;
      display: ${(props) => (props.errorCounter ? "none" : "block")};
    }

    .error-navigation-button {
      height: 40px;
      padding: 0 20px;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      background-color: ${(props) => (props.errorCounter ? "#fff" : "#18bd5b")};
      color: ${(props) => (props.errorCounter ? "#2c3345" : "#fff")};
    }
  }
`;

export const FooterStyle = styled.footer`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 0.5em;

  p {
    color: white;
  }

  a {
    align-self: center;
    margin-left: 0.5em;
  }

  img {
    height: 1.5em;
    width: 1.5em;
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;
