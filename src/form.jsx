import react from "react";
import { useState, useEffect } from "react";
import "./Form.css";
import DynamicInput from "./components/DynamicInput";

export default function Form({ sections }) {
  const initialValues = sections.reduce((sectionsObj, configs) => {
    configs.forEach((config) => {
      sectionsObj[config.name] = config.initialValue;
    });
    return sectionsObj;
  }, {});
  const [formValues, setFormValues] = useState(initialValues);
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
      const errorElement = document.querySelector(`[name="${keys[0]}"]`);
      errorElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };

  const validate = (values) => {
    return sections.reduce((errors, configs) => {
      configs.forEach((config) => {
        if (!("errorMessageFunction" in config)) {
          return errors;
        }

        const error = config.errorMessageFunction(values[config.name]);

        if (error) {
          errors[config.name] = error;
        }
      });

      return errors;
    }, {});
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
                  errorMessageVisibility && errorCounter < 1 ? "block" : "none",
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
        {sections.map((section) => (
          <div className="form-line" style={formLineStyle}>
            <label className="form-label">
              {section[0].label}
              {section[0].errorMessageFunction ? (
                <span className="form-required">*</span>
              ) : null}
            </label>
            <div className="test-input">
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
            <div class="form-error-message">
              {section.map((inputConfig) => formErrors[inputConfig.name])}
            </div>
          </div>
        ))}
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
    </form>
  );
}
