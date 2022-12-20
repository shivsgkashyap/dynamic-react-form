import react from "react";
import { useState, useEffect } from "react";
import DynamicInput from "./components/DynamicInput";
import {
  ErrorBanner,
  FormAll,
  FormLabelStyle,
  FormLineStyle,
  HeaderStyle,
  SubmitButton,
  UserInput,
  GlobalFormStyle,
} from "./components/styles/Form.Style";

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

  return (
    <GlobalFormStyle onSubmit={handleSubmit}>
      <FormAll>
        <ErrorBanner
          errorCounter={errorCounter}
          errorMessageVisibility={errorMessageVisibility}
        >
          <div className="error-navigation-inner">
            <span className="error-navigation-message">
              {errorCounter > 1 ? "There are " : "There is "}
              <strong>{errorCounter}</strong>
              {errorCounter > 1
                ? " errors in this page. Please correct them before moving on."
                : " error in this page. Please correct it before moving on."}
            </span>
            <span className="error-navigation-message-2">
              Well done! All errors are fixed.
            </span>
            <button
              className="error-navigation-button"
              type="button"
              onClick={errorCounter >= 1 ? handleErrorClick : handleDoneClick}
            >
              {errorCounter >= 1 ? "See Errors" : "Done"}
            </button>
          </div>
        </ErrorBanner>
        <HeaderStyle>
          <div className="form-header">
            <h1 className="form-header-text">Customer Details:</h1>
          </div>
        </HeaderStyle>
        {sections.map((section) => (
          <FormLineStyle
            bg={
              section.some((inputConfig) => formErrors[inputConfig.name])
                ? "#ffeded"
                : "white"
            }
          >
            <FormLabelStyle>
              {section[0].label}
              {section[0].errorMessageFunction ? (
                <span className="form-required">*</span>
              ) : null}
            </FormLabelStyle>
            <UserInput>
              {section.map((inputConfig) => (
                <DynamicInput
                  inputConfig={inputConfig}
                  value={formValues[inputConfig.name]}
                  formErrors={formErrors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              ))}
            </UserInput>
          </FormLineStyle>
        ))}
        <SubmitButton>
          <div className="form-buttons-wrapper">
            <button type="submit" className="form-submit-button">
              Submit
            </button>
          </div>
        </SubmitButton>
      </FormAll>
    </GlobalFormStyle>
  );
}
