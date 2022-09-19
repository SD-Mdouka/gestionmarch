import React, { useState, useRef } from "react";
import { ReadList } from "../../helpers/ReadList";
import { ClearIndput } from "../../helpers/ClearInput";
import { CreateProduct } from "../../helpers/CreateProduct";
import InputTotal from "./InputTotal";

const Inpute = () => {
  const handelCreat = () => {
    //object list product
    let ListPro = CreateProduct();
    ClearIndput();
    ReadList(ListPro);
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
