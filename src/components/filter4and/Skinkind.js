import React from "react";

const Skinkind = () => {
  

  return (
    <div>
      {" "}
      <h2>skin kind</h2>{" "}
      <label className="me-2 d-flex">
        <input
          type="checkbox"
          value="Senstive"
        //   onChange={(e) => setSenstive(e.target.value)}
          className="me-1"
        />
        <span>skinSenstivety</span>
      </label>
    </div>
  );
};

export default Skinkind;
