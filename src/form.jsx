import react from "react";
import { useState } from "react";
import "./form.css";

function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-flex">
        <div className="header-container">
          <div className="form-header">
            <h1 className="form-header-text">Customer Details:</h1>
          </div>
        </div>
        <div className="form-line" id="id_1">
          <label className="form-label form-label-top">
            Full Name
            <span className="form-required"> * </span>
          </label>
          <div className="name-input">
            <div className="form-sub-label-container">
              <input
                type="text"
                name="firstName"
                className="name-input-box"
                value={formValues.firstName}
                onChange={handleChange}
              />
              <label className="form-sub-label"> First Name </label>
            </div>
            <p> {formErrors.firstName} </p>
            <div className="form-sub-label-container">
              <input
                type="text"
                name="lastName"
                className="name-input-box"
                value={formValues.lastName}
                onChange={handleChange}
              />
              <label className="form-sub-label"> Last Name </label>
            </div>
            <div> {formErrors.lastName} </div>
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
                className="phone-number-input-box"
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
                className="email-input-box"
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
