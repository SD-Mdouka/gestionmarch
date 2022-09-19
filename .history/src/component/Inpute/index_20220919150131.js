import React from "react";
import { ClearIndput } from "../../helpers/ClearInput";
import { CreateProduct, ReadList } from "../../helpers/CreateProduct";
import InputTotal from "./InputTotal";
const Inpute = ({ btnUpdate, setBtnUpdate }) => {
  const handelUpdate = () => {
    console.log("update");
  };
  const handelCreat = () => {
    //object list product
    CreateProduct();
    ClearIndput();
    ReadList();
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
      <button
        onClick={() => {
          if (!btnUpdate) {
            handelCreat();
          } else {
            handelUpdate();
          }
        }}
      >
        {!btnUpdate ? "Create" : "Update"}
      </button>
    </div>
  );
};

export default Inpute;
