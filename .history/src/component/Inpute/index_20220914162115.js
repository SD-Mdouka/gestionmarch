import React, { useState } from "react";
import { CreateProduct } from "../../helpers/CreateProduct";
import InputTotal from "./InputTotal";

const Inpute = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [tva, setTva] = useState("");
  const [ads, setAds] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState("");
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
  // state list object
  const [productList, setProductList] = useState([]);

  const handelCreate = () => {
    setProductList((list) => [
      ...list,
      CreateProduct(price, tva, ads, discount, title, count, category, total),
    ]);
    console.log(productList);
  };
  //function hooks

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
      <button type="submit" onClick={() => handelCreate()}>
        Create
      </button>
    </div>
  );
};

export default Inpute;
