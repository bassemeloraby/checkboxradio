import React, { useState } from "react";
import { productDb } from "../mederma.products";
import { CompanyDb } from "../CosmoticData";

// react-window
import { VariableSizeGrid as Grid } from 'react-window';

// These item sizes are arbitrary.
// Yours should be based on the content of the item.
const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));
 
  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div style={style}>
      Item {rowIndex},{columnIndex}
    </div>
  );
   
 

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
        <Grid
        columnCount={1000}
        columnWidth={index => columnWidths[index]}
        height={1000}
        rowCount={1000}
        rowHeight={index => rowHeights[index]}
        width={1000}
        
      >
        {Cell}
      </Grid>
        </div>
      </section>
    </div>
  );
};

export default CosmoticSF;
