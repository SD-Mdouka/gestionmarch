import React from "react";
import InputTotal from "./InputTotal";

const Inpute = () => {
  return (
    <div className="input">
      <input placeholder="Title" id="title" name="title" type={"text"} />
      <InputTotal />
      <input placeholder="Count" id="Count" name="Count" type={"number"} />
      <input
        placeholder="Category"
        id="Category"
        name="Category"
        type={"text"}
      />
      <button type="submit">Create</button>
    </div>
  );
};

export default Inpute;
