import react from "react";
import { useState } from "react";
import "./form.css";

function Form() {
  const initialValues = { firstName: "", lastName: "", number: "", email: "" };
  const [formValues, setFormValues] = useState({ initialValues });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
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
    if (!values.email) {
      errors.email = "This field is required.";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    return errors;
  };

  const formLineStyle = {
    "background-color":
      formErrors.firstName || formErrors.lastName ? "#ffeded" : "white",
  };

  const errorMessageStyle = {
    visibility:
      formErrors.firstName || formErrors.lastName ? "visible" : "hidden",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-flex">
        <div className="header-container">
          <div className="form-header">
            <h1 className="form-header-text">Customer Details:</h1>
          </div>
        </div>
        <div className="form-line" style={formLineStyle} id="id_1">
          <label className="form-label form-label-top">
            Full Name
            <span className="form-required"> * </span>
          </label>
          <div className="name-input">
            <div className="input-wrapper">
              <div className="form-sub-label-container">
                <input
                  type="text"
                  name="firstName"
                  className={
                    formErrors.firstName ? "error-input-box" : "name-input-box"
                  }
                  value={formValues.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label className="form-sub-label"> First Name </label>
              </div>
              <div
                className="form-sub-label-container"
                style={{ "margin-left": "24px" }}
              >
                <input
                  type="text"
                  name="lastName"
                  className={
                    formErrors.lastName ? "error-input-box" : "name-input-box"
                  }
                  value={formValues.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label className="form-sub-label"> Last Name </label>
              </div>
            </div>
            <div class="form-error-message" style={errorMessageStyle}>
              <img src="https://cdn.jotfor.ms/images/exclamation-octagon.png" />
              {formErrors.firstName || formErrors.lastName}
            </div>
          </div>
        </div>
        <div className="form-line" id="id_2">
          <label className="form-label form-label-top">
            Address
            <span className="form-required">*</span>
          </label>

          <div className="address-input">
            <div className="address-table">
              <div className="form-address-line-wrapper-top">
                <div className="form-address-street-line">
                  <div className="form-sub-label-container">
                    <input
                      type="text"
                      className="address-input-box"
                      value={formValues.address}
                    />
                    <label className="form-sub-label"> Street Address </label>
                  </div>
                </div>
              </div>

              <div className="form-address-line-wrapper">
                <div className="form-address-street-line">
                  <div className="form-sub-label-container">
                    <input
                      type="text"
                      className="address-input-box"
                      value={formValues.address}
                    />
                    <label className="form-sub-label">
                      Street Address Line 2
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-address-line-wrapper">
                <div className="form-address-city-line">
                  <div className="form-sub-label-container">
                    <input type="text" className="address-input-box" />
                    <label className="form-sub-label"> City </label>
                  </div>
                </div>
                <div className="form-address-state-line">
                  <div className="form-sub-label-container">
                    <input
                      type="text"
                      className="address-input-box"
                      value={formValues.address}
                    />
                    <label className="form-sub-label"> State / Province </label>
                  </div>
                </div>
              </div>

              <div className="form-address-line-wrapper">
                <div className="form-address-zip-line">
                  <div className="form-sub-label-container">
                    <input
                      type="text"
                      className="address-input-box"
                      value={formValues.address}
                    />
                    <label className="form-sub-label">Postal / Zip Code</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              />
            </div>
            <p> {formErrors.number} </p>
          </div>
        </div>

        <div className="form-line" id="id_4">
          <label className="form-label form-label-top">
            E-mail
            <span className="form-required"> * </span>
          </label>
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
              />
              <label className="form-sub-label"> example@example.com </label>
            </div>
            <p> {formErrors.email} </p>
          </div>
        </div>

        <div className="form-line" id="id_5">
          <label className="form-label form-label-top">
            How did you hear about us?
            <span className="form-required"> * </span>
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
            <div className="form-checkbox">
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

        <div className="form-line" id="id_9">
          <label className="form-label form-label-top">
            Please give reference of any two people whom you feel:
          </label>
          <div className="reference grid">
            <div className="form-sub-label-container">
              <input
                type="text"
                className="email-input-box"
                placeholder="ex: email@yahoo.com"
              />
              <label className="form-sub-label"> example@example.com </label>
            </div>
          </div>
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </form>
  );
}

export default Form;
