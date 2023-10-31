import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [cosmotics1, setCosmotics1] = useState("");
  console.log(cosmotics1);

  return (
    <div className="App">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
          onChange={(e) => setCosmotics1(e.target.value)}
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          1
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
          onChange={(e) => setCosmotics1(e.target.value)}

        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          2
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
          onChange={(e) => setCosmotics1(e.target.value)}

        />
        <label className="form-check-label" htmlFor="inlineRadio3">
          3 (disabled)
        </label>
      </div>
    </div>
  );
}

export default App;
