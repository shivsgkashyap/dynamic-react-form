import React from "react";
export default function DynamicInput({
  value,
  formErrors,
  handleChange,
  handleBlur,
  errorMessageStyle,
  inputConfig: {
    label,
    name,
    type,
    initialValue,
    errorMessageFunction,
    subLabel,
    half,
  },
}) {
  return (
    <>
      <div
        className="form-sub-label-container"
        style={{ flexBasis: `${half}` + "%" }}
      >
        <input
          type={type}
          name={name}
          className={formErrors[name] ? "error-input-box" : "textbox-input"}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label className="form-sub-label"> {subLabel} </label>
      </div>
      {/* <div class="form-error-message" style={errorMessageStyle}>
        <img src="https://cdn.jotfor.ms/images/exclamation-octagon.png" /> 
        {errorMessageFunction ? errorMessageFunction(value) : null}
      </div> */}
    </>
  );
}
