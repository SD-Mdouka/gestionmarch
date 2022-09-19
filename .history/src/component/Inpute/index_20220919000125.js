import React, { useState, useRef } from "react";
import { ClearIndput } from "../../helpers/ClearInput";
import { CreateProduct } from "../../helpers/CreateProduct";
import { ReadList } from "../../helpers/ReadList";
import InputTotal from "./InputTotal";
const Inpute = () => {
  const handelCreat = () => {
    //object list product
    let listPro = CreateProduct();
    console.log(listPro);
    ClearIndput();
    ReadList(listPro);
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
