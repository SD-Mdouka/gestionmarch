import React, { useState, useRef } from "react";
import { ClearIndput } from "../../helpers/ClearInput";
import { CreateProduct, ReadList } from "../../helpers/CreateProduct";
import InputTotal from "./InputTotal";
const Inpute = ({}) => {
  const handelCreat = () => {
    //object list product
    CreateProduct();
    ClearIndput();
    // ReadList();
    setProductList([...CreateProduct()]);
  };

  return (
    <div className="input">
      <input id="inputTitle" placeholder="Title" name="title" type={"text"} />
      <InputTotal />
      <input id="inputCount" placeholder="Count" name="Count" type={"number"} />
      <input
        id="inputCategory"
        placeholder="Category"
        name="Category"
        type={"text"}
      />
      <button onClick={() => handelCreat()}>Create</button>
    </div>
  );
};

export default Inpute;
