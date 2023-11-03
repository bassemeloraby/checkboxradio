import React, { useEffect, useState } from "react";
import { productDb } from "../mederma.products";
import { CompanyDb, useDb } from "../CosmoticData";
import { Form } from "react-bootstrap";

const Filter2 = () => {
  const [filterKind, setFilterKind] = useState(false);
  const [items, setItems] = useState([]);

  const [companyFilter, setCompanyFilter] = useState("");
  const [useFilter, setUseFilter] = useState("");

  const [openCompany, setOpenCompany] = useState(false);
  const [openUse, setOpenUse] = useState(false);

  useEffect(() => {
    if (filterKind === "no") {
      setCompanyFilter("");
      setUseFilter("");
      setOpenCompany(false);
      setOpenUse(false);
      setItems(productDb);
    }
    if (filterKind === "company") {
      setUseFilter("");
      setOpenCompany(true);
      setOpenUse(false);
      const filterdata = productDb.filter((c) =>
        c.Company?.includes(companyFilter)
      );

      setItems(filterdata);
    }
    if (filterKind === "use") {
      setCompanyFilter("");
      setOpenCompany(false);
      setOpenUse(true);
      const filterdata = productDb.filter(
        (c) => c.use1?.includes(useFilter) || c.use2?.includes(useFilter)
      );

      setItems(filterdata);
    }
    if (filterKind === "all") {
      setOpenCompany(true);
      setOpenUse(true);
      const filterdata = productDb.filter(
        (c) =>
          c.Company?.includes(companyFilter) &&
          (c.use1?.includes(useFilter) || c.use2?.includes(useFilter))
      );

      setItems(filterdata);
    }
  }, [filterKind, companyFilter, useFilter]);

  console.log(companyFilter);
  console.log(useFilter);

  return (
    <div>
      <h2>Filter2</h2>
      <div className="d-flex">
        <section className="1 sidebar col-2 bg-info ">
          <div className="ms-1 me-1">
            <Form.Group>
              <Form.Label> Search by</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setFilterKind(e.target.value)}
                className="me-2"
              >
                <option value="no">no filter</option>
                <option value="company">Company</option>
                <option value="use">Use</option>
                <option value="all">all</option>
              </Form.Select>
            </Form.Group>

            {openCompany && (
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
            )}

            {openUse && (
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
            )}
          </div>
        </section>
        <section className="2 main col-10 ">
          <div className="bg-warning">
            items count : {items.length} Company: {companyFilter} Use:{" "}
            {useFilter}
          </div>
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

export default Filter2;
