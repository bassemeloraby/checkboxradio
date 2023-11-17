import React, { useState } from "react";
import { productDb } from "../mederma.products";
import { CompanyDb } from "../CosmoticData";
import { FixedSizeList } from "react-window";
import { faker } from "@faker-js/faker";

const CosmoticSF = () => {
  const [companies, setCompanies] = useState(CompanyDb);
  //   const [list, setList] = useState(productDb);

  const handleChangeChecked = (id) => {
    const cusinesStateList = companies;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCompanies(changeCheckedCuisines);
  };

  const data = productDb;

  const Row = ({ index, style }) => {
    const isEvenRow = index % 2 === 0;
    const backgroundColor = isEvenRow ? "#F9A03F" : "#FDDB3A";
    const textColor = isEvenRow ? "#FFFFFF" : "#4A4A4A";
    const rowStyle = {
      ...style,
      backgroundColor,
      color: textColor,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
    };
    return (
      <section >
        <div style={rowStyle}>
          <p>{data[index].Company}</p>
          <p>{data[index].Description}</p>
        </div>
      </section>
    );
  };

  return (
    <div>
      <h2>CosmoticSF</h2>
      <section className="d-flex">
        <div className="1-sb col-2 border-end  border-warning">
          {companies.map((c, i) => (
            <label className="me-2 d-flex" key={i}>
              <input
                type="checkbox"
                checked={c.checked}
                onChange={() => handleChangeChecked(c.id)}
                className="me-1"
              />
              <span>{c.name}</span>
            </label>
          ))}
        </div>
        <div className="2-mb ps-1">
          <FixedSizeList
            height={600}
            width={1100}
            itemSize={50}
            itemCount={data.length}
          >
            {Row}
          </FixedSizeList>
          
        </div>
      </section>
    </div>
  );
};

export default CosmoticSF;
