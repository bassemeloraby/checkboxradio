import { useState } from "react";
import { CompanyDb, skinKindDb } from "../CosmoticData";
import { Fragment } from "react";
import { productDb } from "../mederma.products";
import { useEffect } from "react";

const Filter1 = () => {
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
      productDb.filter((x) => x.Description.includes(checkedValue.toString()))
    );
  }, [checkedValue]);

  return (
    <div>
      <div className="bg-warning">{checkedValue.toString()}</div>
      <div className="d-flex">
        {" "}
        <section className="1 col-2 ms-2">
          {" "}
          <section>
            <h2>company</h2>
            {CompanyDb.map((s, i) => (
              <Fragment key={i}>
                {" "}
                <label className="me-2 d-flex">
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
          {/* ---------start test 2--------*/}
          <section>
            <h2>skin kind</h2>
            {skinKindDb.map((s, i) => (
              <Fragment key={i}>
                {" "}
                <label className="me-2 d-flex">
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
        </section>
        {/* ---------start show product--------*/}
        <section className="2 col-10">
          {items.map((p, i) => (
            <h5 key={i}>{p.Description}</h5>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Filter1;
