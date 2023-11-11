import React, { useEffect, useState } from "react";
import { productDb } from "../mederma.products";
import { CompanyDb, useDb } from "../CosmoticData";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Filter4and = () => {
  const [items, setItems] = useState([]);

  const [companyFilter, setCompanyFilter] = useState("");
  const [useFilter, setUseFilter] = useState("");

  useEffect(() => {
    setItems(
      productDb.filter(
        (c) =>
          c.Company?.includes(companyFilter) &&
          (c.use1?.includes(useFilter) || c.use2?.includes(useFilter))
      )
    );
  }, [companyFilter, useFilter]);

  useEffect(() => {
    setItems(productDb);
  }, []);

  const clearHandler = () => {
    setCompanyFilter("");
    setUseFilter("");
  };

  return (
    <div>
      <h2>Filter4</h2>
      <div className="d-flex">
        <section className="1 sidebar col-2 bg-info ">
          <Button variant="secondary" onClick={clearHandler} className="m-2">
            Clear
          </Button>{" "}
          <div className="ms-1 me-1">
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCompanyFilter(e.target.value)}
                className="mb-2"
              >
                <option value="">all companies</option>
                {CompanyDb.map((s, i) => (
                  <option value={s.name} key={i}>
                    {s.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>use</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setUseFilter(e.target.value)}
                className="mb-2"
              >
                <option value="">all uses</option>
                {useDb.map((s, i) => (
                  <option value={s.name} key={i}>
                    {s.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        </section>
        {/*--------mainbar------ */}
        <section className="2 main col-10 ">
          <div className="bg-warning d-flex justify-content-around col-8">
            <span> items count : {items.length} </span>
            <span> Company: {companyFilter} </span>
            <span> Use: {useFilter}</span>
          </div>
          <div className="bg-success">
            {" "}
            {items.map((p, i) => (
              <div key={i} className="ms-1 d-flex">
                <h5>
                  {p.Description} <br />
                </h5>
                <input type="checkbox" defaultValue={p.skinSenstivety} />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            {items.length === 0 && <h4>No results</h4>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Filter4and;
