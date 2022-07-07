import React from "react";

export default function DynamicInput({
  value,
  formErrors,
  formValues,
  handleChange,
  handleBlur,
  errorMessageStyle,
  inputConfig: { name, type, initialValue, errorMessageFunction },
}) {
  if (type === "name") {
    return (
      <>
        <label className="form-label form-label-top">
          Full Name
          <span className="form-required"> * </span>
        </label>
        <div className="name-input">
          <div className="input-wrapper">
            <div className="form-sub-label-container first-name">
              <input
                type="text"
                name="firstName"
                className={
                  formErrors[value] ? "error-input-box" : "name-input-box"
                }
                value={formValues[value]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className="form-sub-label"> First Name </label>
            </div>
            <div
              className="form-sub-label-container sub-label-media"
              style={{ "margin-left": "24px" }}
            >
              <input
                type="text"
                name="lastName"
                className={
                  formErrors[value] ? "error-input-box" : "name-input-box"
                }
                value={formValues[value]}
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
      </>
    );
  } else if (type === "address") {
    return (
      <>
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
                    name="address"
                    className={
                      formErrors[value]
                        ? "error-input-box"
                        : "address-input-box"
                    }
                    value={formValues[value]}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    name="address"
                    className={
                      formErrors[value]
                        ? "error-input-box"
                        : "address-input-box"
                    }
                    value={formValues[value]}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
              <div className="form-address-state-line sub-label-media">
                <div className="form-sub-label-container">
                  <input
                    type="text"
                    name="address"
                    className={
                      formErrors[value]
                        ? "error-input-box"
                        : "address-input-box"
                    }
                    value={formValues[value]}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    name="address"
                    className={
                      formErrors[value]
                        ? "error-input-box"
                        : "address-input-box"
                    }
                    value={formValues[value]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label className="form-sub-label">Postal / Zip Code</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else
    return (
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={name}
      />
    );
}
