import React, { Fragment, useEffect, useState } from "react";
import { productDb } from "../mederma.products";
import { CompanyDb, useDb } from "../CosmoticData";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Filter3 = () => {
  const [items, setItems] = useState([]);
  const [buttonKind, setButtonKind] = useState(true);
  const [oneFilter, setOneFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [useFilter, setUseFilter] = useState("");

  useEffect(() => {
    if (buttonKind) {
      setCompanyFilter("")
      setUseFilter("")
      setItems(
        productDb.filter(
          (c) =>
            c.Company?.includes(oneFilter) ||
            c.use1?.includes(oneFilter) ||
            c.use2?.includes(oneFilter)
        )
      );
    } else {
      setItems(productDb);
    }
  }, [buttonKind, oneFilter]);


  useEffect(() => {
    if (!buttonKind) {
      setOneFilter("");
      setItems(
        productDb.filter(
          (c) =>
            c.Company?.includes(companyFilter) &&
            (c.use1?.includes(useFilter) || c.use2?.includes(useFilter))
        )
      );
    } else {
      setItems(productDb);
    }
  }, [buttonKind, companyFilter, useFilter]);

  console.log(buttonKind);
  console.log(oneFilter);
  console.log(companyFilter);
  console.log(useFilter);

  return (
    <div>
      <h2>Filter3</h2>
      <div className="d-flex">
        <section className="1 sidebar col-2 bg-info ">
          <div className="ms-1 me-1">
            <Button
              variant="primary"
              onClick={() => setButtonKind(!buttonKind)}
              style={
                buttonKind
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "red" }
              }
            >
              {buttonKind ? "or" : "and"}
            </Button>{" "}
            <span>{buttonKind?"one filter":"many filter"}</span>
            {buttonKind && (
              <div style={{ backgroundColor: "red" }}>
                {" "}
                <Form.Group>
                  <Form.Label>Company</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setOneFilter(e.target.value)}
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
                    onChange={(e) => setOneFilter(e.target.value)}
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
            )}
            {!buttonKind && (
              <Fragment>
                {" "}
                
              </Fragment>
            )}
          </div>
        </section>
        <section className="2 main col-10 ">
          {buttonKind && (
            <div className="bg-primary">
              items count : {items.length} filter for : {oneFilter}
            </div>
          )}
          {!buttonKind && (
            <div className="bg-warning">
              items count : {items.length} Company: {companyFilter} Use:{" "}
              {useFilter}
            </div>
          )}

          <div className="bg-success">
            {" "}
            {items.map((p, i) => (
              <h5 key={i} className="ms-1">
                {p.Description}
              </h5>
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

export default Filter3;
