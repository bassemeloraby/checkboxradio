import React, { useEffect, useState } from "react";
import { productDb } from "../mederma.products";
import { CompanyDb } from "../CosmoticData";
// import { dataList } from "../data/cuisine";

const FilterC = () => {
  const [cuisines, setCuisines] = useState(CompanyDb);
  const [list, setList] = useState(productDb);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  useEffect(() => {
    const applyFilters = () => {
      let updatedList = productDb;

      // Cuisine Filter
      const cuisinesChecked = cuisines
        .filter((item) => item.checked)
        .map((item) => item.name);

      if (cuisinesChecked.length) {
        updatedList = updatedList.filter((item) =>
          cuisinesChecked.includes(item.Company)
        );
        setList(updatedList);
      }else{
        setList(productDb)
      }

    };
    applyFilters();
  }, [cuisines]);


  console.log(cuisines);
  console.log(list,"list");
  // console.log(dataList);
  // console.log(dataList);
  return (
    <div>
      <h2>FilterC</h2>
      <section className="d-flex">
        <div className="1 sidebar col-4">
          sidebar
          {cuisines.map((c, i) => (
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
        <div className="2 mainbar">
          {" "}
          {list.map((p, i) => (
            <h6 key={i}>{p.Company}</h6>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FilterC;
