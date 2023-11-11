import React, { useEffect, useState } from "react";
import { dataList } from "../data/cuisine";
const Cuisine = () => {
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);

  const [list, setList] = useState(dataList);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  useEffect(() => {
    const applyFilters = () => {
      let updatedList = dataList;

      // Cuisine Filter
      const cuisinesChecked = cuisines
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());

      if (cuisinesChecked.length) {
        updatedList = updatedList.filter((item) =>
          cuisinesChecked.includes(item.cuisine)
        );
        setList(updatedList);
      }else{
        setList(dataList)
      }

    };
    applyFilters();
  }, [cuisines]);

  console.log(cuisines);
  return (
    <div>
      {" "}
      <h1>Cuisine</h1>
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
              <span>{c.label}</span>
            </label>
          ))}
        </div>
        <div className="2 mainbar">
          {" "}
          {list.map((p, i) => (
            <h6>{p.cuisine}</h6>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cuisine;
