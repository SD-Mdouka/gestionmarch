import React, { useState } from "react";
import { getSearch, SearchData } from "../../helpers/Search";
import { ReadList } from "../../helpers/CreateProduct";
import ListProduct from "./ListProduct";

const OutPute = ({ btnUpdate, setBtnUpdate, NbIndex, setNbIndex }) => {
  const [ModeList, setModeList] = useState(true);
  const [ListSearch, setListSearch] = useState([]);
  const params = {
    btnUpdate,
    setBtnUpdate,
    NbIndex,
    setNbIndex,
    ModeList,
    setModeList,
    ListSearch,
    setListSearch,
  };
  return (
    <div className="output">
      <div className="searchBlock">
        <input
          placeholder="Serach"
          id="inputSerach"
          name="Searche"
          type={"text"}
          onKeyUp={(e) => {
            if (e.target.value === "") {
              setModeList(true);
            } else {
              setListSearch(SearchData(e.target.value, ReadList()));
              setModeList(false);
            }
          }}
        />
        <div className="btnSearch">
          <button onClick={(e) => getSearch(e.target.id)} id="SearchByTitle">
            Search By Title
          </button>
          <button onClick={(e) => getSearch(e.target.id)} id="SearchByCategory">
            Search By Category
          </button>
        </div>
        <ListProduct {...params} />
      </div>
    </div>
  );
};

export default OutPute;
