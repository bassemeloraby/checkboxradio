import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { CompanyDb, skinKindDb } from "./CosmoticData";
import { Fragment } from "react";
import { productDb } from "./mederma.products";
import { useEffect } from "react";

function App() {
  const [checkedValue, setCheckedValue] = useState([]);
  const [items, setItems] = useState([]);

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

  useEffect(() => {
    if (!checkedValue) setItems(productDb);
    setItems((_) =>
      productDb.filter((x) =>
        x.Description.includes(checkedValue)
      )
    );
  }, [checkedValue]);

  return (
    <div className="container">
      <div className="bg-warning">{checkedValue}</div>
      <section>
        <h2>company</h2>
        {CompanyDb.map((s, i) => (
          <Fragment key={i}>
            {" "}
            <label className="me-2">
              <input
                type="checkbox"
                value={s.name}
                onChange={handleChange}
                className="me-1"
              />
              <span>{s.name}</span>
            </label>
          </Fragment>
        ))}
      </section>
      <hr />
      {/* ---------start test 2--------*/}
      <section>
        <h2>skin kind</h2>
        {skinKindDb.map((s, i) => (
          <Fragment key={i}>
            {" "}
            <label className="me-2">
              <input
                type="checkbox"
                value={s.name}
                onChange={handleChange}
                className="me-1"
              />
              <span>{s.name}</span>
            </label>
          </Fragment>
        ))}
      </section>
      {/* ---------start show product--------*/}
      <hr />
      {items.map((p, i) => (
        <h5 key={i}>{p.Description}</h5>
      ))}
    </div>
  );
}

export default App;
