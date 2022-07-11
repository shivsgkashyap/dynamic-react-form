import react from "react";
import { useState, useEffect } from "react";
import "./Form.css";
import DynamicInput from "./components/DynamicInput";
import Recommendations from "./components/Recommendations";

export default function Form({ sections }) {
  const initialValues = sections.reduce((sectionsObj, config) => {
    sectionsObj[config.name] = config.initialValue;
    return sectionsObj;
  }, {});
  const [formValues, setFormValues] = useState({ initialValues });
  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState([]);
  const [isSubmitting, setSubmitting] = useState(false);
  const errorCounter = Object.keys(formErrors).length;
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);

  // Clear touched & Update Error counter after submitting
  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(formErrors).length === 0;
      if (noErrors) {
        setTouched([]);
        setSubmitting(false);
      } else {
        setSubmitting(false);
        setTouched(Object.keys(formErrors));
      }
    }
  }, [isSubmitting, formErrors]);

  // Need to rerun after there is a changed to touched
  // This checks to see if there are any errors that should be highlighted
  useEffect(() => {
    const validationErrors = validate(formValues);
    const touchedErrors = Object.keys(validationErrors)
      .filter((key) => touched.includes(key)) // get all touched keys
      .reduce((acc, key) => {
        if (!acc[key]) {
          acc[key] = validationErrors[key];
        }
        return acc;
      }, {});
    setFormErrors(touchedErrors);
  }, [touched, formValues]);

  useEffect(() => {
    if (errorCounter >= 1) {
      setErrorMessageVisibility(true);
    }
  }, [errorCounter, errorMessageVisibility]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmitting(true);
  };

  const handleBlur = (event) => {
    if (!touched.includes(event.target.name)) {
      setTouched([...touched, event.target.name]);
    }
  };

  const handleDoneClick = (e) => {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setErrorMessageVisibility(false);
  };

  const handleErrorClick = (e) => {
    const keys = Object.keys(formErrors);
    if (keys.length > 0) {
      const errorElement = document.querySelector(`input[name="${keys[0]}"]`);
      errorElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!values.firstName) {
      errors.firstName = "This field is required.";
    }
    if (!values.lastName) {
      errors.lastName = "This field is required.";
    }
    if (!values.number) {
      errors.number = "This field is required.";
    }
    if (!values.address) {
      errors.address = "This field is required.";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    return errors;
  };

  const formLineStyle = {
    "background-color":
      formErrors.firstName || formErrors.lastName || formErrors.address
        ? "#ffeded"
        : "white",
  };

  const errorMessageStyle = {
    visibility:
      formErrors.firstName || formErrors.lastName || formErrors.address
        ? "visible"
        : "hidden",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-all">
        <div className="form-flex">
          <div
            className={
              errorMessageVisibility && errorCounter >= 1
                ? "error-navigation-container"
                : "error-navigation-container is-success"
            }
            style={{
              visibility: errorMessageVisibility ? "visible" : "hidden",
            }}
          >
            <div className="error-navigation-inner">
              <span
                className="error-navigation-message"
                style={{ display: errorCounter >= 1 ? "block" : "none" }}
              >
                {errorCounter > 1 ? "There are " : "There is "}
                <strong>{errorCounter}</strong>{" "}
                {errorCounter > 1
                  ? "errors in this page. Please correct them before moving on."
                  : "error in this page. Please correct it before moving on."}
              </span>
              <span
                className="error-navigation-message"
                style={{ display: errorCounter < 1 ? "block" : "none" }}
              >
                Well done! All errors are fixed.
              </span>
              <button
                className="error-navigation-next-button"
                type="button"
                onClick={handleErrorClick}
                style={{ visibility: errorCounter >= 1 ? "visible" : "hidden" }}
              >
                See Errors
              </button>
              <button
                className="error-navigation-done-button"
                style={{
                  display:
                    errorMessageVisibility && errorCounter < 1
                      ? "block"
                      : "none",
                }}
                type="button"
                onClick={handleDoneClick}
              >
                Done
              </button>
            </div>
          </div>
          <div className="header-container">
            <div className="form-header">
              <h1 className="form-header-text">Customer Details:</h1>
            </div>
          </div>
          {/* {sections.map((section) => (
            <div className="form-line" style={formLineStyle}>
              {section.map((inputConfig) => (
                <DynamicInput
                  inputConfig={inputConfig}
                  value={formValues[inputConfig.name]}
                  formErrors={formErrors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errorMessageStyle={errorMessageStyle}
                />
              ))}
            </div>
          ))} */}
          <div class="form-line" id="id_3">
            <label className="form-label form-label-top">
              Phone Number
              <span class="form-required"> * </span>
            </label>
            <div className="phone-number-input">
              <div className="form-sub-label-container">
                <input
                  type="tel"
                  name="number"
                  className={
                    formErrors.number
                      ? "error-input-box"
                      : "phone-number-input-box"
                  }
                  placeholder="(000) 000-0000"
                  value={formValues.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <p> {formErrors.number} </p>
            </div>
          </div>
          <div className="form-line" id="id_4">
            <label className="form-label form-label-top">E-mail</label>
            <div className="email-input">
              <div className="form-sub-label-container">
                <input
                  type="text"
                  name="email"
                  className={
                    formErrors.email ? "error-input-box" : "email-input-box"
                  }
                  placeholder="ex: email@yahoo.com"
                  value={formValues.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label className="form-sub-label"> example@example.com </label>
              </div>
              <p> {formErrors.email} </p>
            </div>
          </div>
          <div className="form-line" id="id_5">
            <label className="form-label form-label-top">
              How did you hear about us?
            </label>
            <div className="hear-input">
              <select class="hear-dropdown">
                <option value=""> Please Select </option>
                <option value="Newspaper"> Newspaper </option>
                <option value="Internet"> Internet </option>
                <option value="Magazine"> Magazine </option>
                <option value="Other (Please specify...)">
                  Other (Please specify...)
                </option>
              </select>
            </div>
          </div>
          <div className="form-line" id="id_6">
            <label className="form-label form-label-top">
              Feedback about us:
            </label>
            <div className="suggestions-input">
              <textarea className="textarea-input"></textarea>
            </div>
          </div>
          <div className="form-line" id="id_7">
            <label className="form-label form-label-top">
              Suggestions if any for further improvement:
            </label>
            <div className="suggestions-input">
              <textarea className="textarea-input"></textarea>
            </div>
          </div>
          <div className="form-line" id="id_8">
            <label className="form-label form-label-top">
              Will you be willing to recommend us?
            </label>
            <div className="recommend-input">
              <div className="form-checkboxes">
                <div className="form-checkbox-item">
                  <input type="checkbox" className="form-checkbox" />
                  <label> Yes </label>
                </div>
                <div className="form-checkbox-item">
                  <input type="checkbox" className="form-checkbox" />
                  <label> Maybe </label>
                </div>
                <div className="form-checkbox-item">
                  <input type="checkbox" className="form-checkbox" />
                  <label> No </label>
                </div>
              </div>
            </div>
          </div>
          <Recommendations />
          <div className="form-line" id="id_10">
            <div className="submit-btn">
              <div className="form-buttons-wrapper">
                <button type="submit" className="form-submit-button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
