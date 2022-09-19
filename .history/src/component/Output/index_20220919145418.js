import React from "react";
import ListProduct from "./ListProduct";

const OutPute = ({ btnUpdate, setBtnUpdate }) => {
  const params = {
    btnUpdate,
    setBtnUpdate,
  };
  return (
    <div className="output">
      <div className="searchBlock">
        <input
          placeholder="Searche"
          id="Searche"
          name="Searche"
          type={"text"}
        />
        <div className="btnSearch">
          <button id="SearchByTitle">Search By Title</button>
          <button id="SearchByCategory">Search By Category</button>
        </div>
        <ListProduct {...params} />
      </div>
    </div>
  );
};

export default OutPute;
