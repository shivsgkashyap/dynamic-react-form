import react from "react";

export default function Input({
  value,
  formErrors,
  formValues,
  handleChange,
  handleBlur,
}) {
  return (
    <input
      type="text"
      name={value}
      className={formErrors[value] ? "error-input-box" : "name-input-box"}
      value={formValues[value]}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}
