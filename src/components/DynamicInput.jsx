import React from "react";
import c from "classnames";
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
        <input
          type={type}
          name={name}
          className={formErrors[name] ? "error-input-box" : "textbox-input"}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeHolder}
        />
        <label className="form-sub-label"> {subLabel} </label>
      </div>
    );
  } else if (type === "largeTextBox") {
    return (
      <div className="suggestions-input">
        <textarea className="textarea-input"></textarea>
      </div>
    );
  } else if (type === "dropdown") {
    return (
      <div className="hear-input">
        <select class="hear-dropdown">
          <option value=""> Please Select </option>
          {options.map((option) => (
            <option value={option}> {option} </option>
          ))}
        </select>
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
      </div>
    );
  } else {
    return null;
  }
}
