import React from "react";
import ListProduct from "./ListProduct";

const OutPute = ({ setRender }) => {
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
        <ListProduct setRender={setRender} />
      </div>
    </div>
  );
};

export default OutPute;
