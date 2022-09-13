import React, { useState } from "react";
import InputTotal from "./InputTotal";

const Inpute = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
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
