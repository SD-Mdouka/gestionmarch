import React from "react";
import { getSearch, SearchData } from "../../helpers/Search";
import ListProduct from "./ListProduct";

const OutPute = ({ btnUpdate, setBtnUpdate, NbIndex, setNbIndex }) => {
  const handelSearch = (mode) => {
    getSearch(mode);
  };
  const params = {
    btnUpdate,
    setBtnUpdate,
    NbIndex,
    setNbIndex,
  };
  return (
    <div className="output">
      <div className="searchBlock">
        <input
          placeholder="Searche"
          id="inputSerach"
          name="Searche"
          type={"text"}
          onKeyUp={() => SearchData()}
        />
        <div className="btnSearch">
          <button
            onClick={() => handelSearch("SerchByTitel")}
            id="SearchByTitle"
          >
            Search By Title
          </button>
          <button
            onClick={() => handelSearch("SerchByCategory")}
            id="SearchByCategory"
          >
            Search By Category
          </button>
        </div>
        <ListProduct {...params} />
      </div>
    </div>
  );
};

export default OutPute;
