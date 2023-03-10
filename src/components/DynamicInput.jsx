import React from "react";
import c from "classnames";
import { InputField } from "./styles/Form.Style";
export default function DynamicInput({
  value,
  formErrors,
  handleChange,
  handleBlur,
  inputConfig: {
    label,
    name,
    type,
    placeHolder,
    initialValue,
    errorMessageFunction,
    subLabel,
    width,
    options,
  },
}) {
  if (type === "smallTextBox") {
    return (
      <div
        className="form-sub-label-container"
        style={{ flexBasis: width + "%" }}
      >
        <InputField border={formErrors[name]}>
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeHolder}
          />
        </InputField>
        {subLabel ? (
          <label className="form-sub-label"> {subLabel} </label>
        ) : null}
        {formErrors[name] ? (
          <div className="form-error-message">{formErrors[name]}</div>
        ) : null}
      </div>
    );
  } else if (type === "largeTextBox") {
    return (
      <div className="suggestions-input">
        <textarea className="textarea-input"></textarea>
        {formErrors[name] ? (
          <div className="form-error-message">{formErrors[name]}</div>
        ) : null}
      </div>
    );
  } else if (type === "dropdown") {
    return (
      <div className="hear-input">
        <select className="hear-dropdown">
          <option value=""> Please Select </option>
          {options.map((option) => (
            <option value={option}> {option} </option>
          ))}
        </select>
        {formErrors[name] ? (
          <div className="form-error-message">{formErrors[name]}</div>
        ) : null}
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className="form-checkboxes">
        {options.map((option) => (
          <div className="form-checkbox-item">
            <input type="checkbox" className="form-checkbox" />
            <label> {option} </label>
          </div>
        ))}
        {formErrors[name] ? (
          <div className="form-error-message">{formErrors[name]}</div>
        ) : null}
      </div>
    );
  } else if (type === "referenceBox") {
    return (
      <div className="form-matrix-table">
        <div className="form-matrix-values small-top"></div>

        {options.map((option, index) => (
          <div
            className={c("form-matrix-values", "top-style", {
              "first-style": index === 0,
              "end-style": index === options.length - 1,
            })}
          >
            {option}
          </div>
        ))}

        <div className="form-matrix-values small-middle">1</div>
        <div className="form-matrix-values middle-style">
          <input type="text" className="form-textbox" />
        </div>
        <div className="form-matrix-values middle-style">
          <input type="text" className="form-textbox" />
        </div>
        <div className="form-matrix-values middle-style end-style">
          <input type="text" className="form-textbox" />
        </div>

        <div className="form-matrix-values small-bottom">2</div>
        <div className="form-matrix-values bottom-style">
          <input type="text" className="form-textbox" />
        </div>
        <div className="form-matrix-values bottom-style">
          <input type="text" className="form-textbox" />
        </div>
        <div className="form-matrix-values bottom-style end-style">
          <input type="text" className="form-textbox" />
        </div>
        {formErrors[name] ? (
          <div className="form-error-message">{formErrors[name]}</div>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
}
