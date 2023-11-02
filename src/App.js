import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [checkedValue, setCheckedValue] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.checked, "e.target.checked");
    // console.log(e.target.value, "e.target.value");
    const { checked, value } = e.target;
    if (checked) {
      setCheckedValue((prev) => [...prev, value]);
    } else
      setCheckedValue((prev) => {
        return [...prev.filter((skill) => skill !== value)];
      });
  };
  console.log(checkedValue);

  return (
    <div className="container">
      <h2>skills</h2>
      <div>
        <label className="">
          <input type="checkbox" value="php" onChange={handleChange} />
          PHP
        </label>
        <br />
        <label className="">
          <input type="checkbox" value="js" onChange={handleChange} />
          JS
        </label>
        <br />
        <label className="">
          <input type="checkbox" value="react" onChange={handleChange} />
          REACT
        </label>
      </div>
      <div>{checkedValue}</div>
    </div>
  );
}

export default App;
