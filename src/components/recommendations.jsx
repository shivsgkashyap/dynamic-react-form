import react from "react";

export default function Recommendations() {
  return (
    <div className="form-line" id="id_11">
      <label className="form-label-ref">
        Please give reference of any two people whom you feel:
      </label>
      <div id="cid_14" className="form-table">
        <div className="form-matrix-table">
          <div className="form-matrix-values small-top">
            <div className="grid-cell"></div>
          </div>
          <div className="form-matrix-values top-style name-style">
            <div className="grid-cell"> Full Name </div>
          </div>
          <div className="form-matrix-values top-style">
            <div className="grid-cell"> Address </div>
          </div>
          <div
            className="form-matrix-values top-style end-style"
            id="smooth-style-top"
          >
            <div className="grid-cell"> Contact Number </div>
          </div>
          <div className="form-matrix-values small-middle">
            <div className="grid-cell"> 1 </div>
          </div>
          <div className="form-matrix-values middle-style">
            <input type="text" className="form-textbox" />
          </div>
          <div className="form-matrix-values middle-style">
            <input type="text" className="form-textbox" />
          </div>
          <div className="form-matrix-values middle-style end-style">
            <input type="text" className="form-textbox" />
          </div>
          <div className="form-matrix-values small-bottom">
            <div className="grid-cell"> 2 </div>
          </div>
          <div className="form-matrix-values bottom-style">
            <input type="text" className="form-textbox" />
          </div>
          <div className="form-matrix-values bottom-style">
            <input type="text" className="form-textbox" />
          </div>
          <div
            className="form-matrix-values bottom-style end-style"
            id="smooth-style-bottom"
          >
            <input type="text" className="form-textbox" />
          </div>
        </div>
      </div>
    </div>
  );
}
