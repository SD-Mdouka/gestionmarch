import React, { useState, useRef } from "react";
import { ClearIndput } from "../../helpers/ClearInput";
import { CreateProduct } from "../../helpers/CreateProduct";
import InputTotal from "./InputTotal";

const Inpute = () => {
  //variable state
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [tva, setTva] = useState("");
  const [ads, setAds] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState("");
  //input total
  const params = {
    price,
    tva,
    ads,
    discount,
    total,
    setPrice,
    setTva,
    setAds,
    setDiscount,
    setTotal,
  };

  const handelCreate = () => {
    CreateProduct(title, price, tva, ads, discount, total, count, category);
    ClearIndput(title, price, tva, ads, discount, total, count, category);
  };

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
      <InputTotal {...params} />
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
      <button onClick={() => handelCreate()}>Create</button>
    </div>
  );
};

export default Inpute;
