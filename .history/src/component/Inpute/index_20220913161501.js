import React, { useState } from "react";
import InputTotal from "./InputTotal";

const Inpute = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="input">
      <input
        placeholder="Title"
        name="title"
        type={"text"}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <InputTotal />
      <input
        placeholder="Count"
        id="Count"
        name="Count"
        type={"number"}
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <input
        placeholder="Category"
        id="Category"
        name="Category"
        type={"text"}
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <button type="submit">Create</button>
    </div>
  );
};

export default Inpute;
