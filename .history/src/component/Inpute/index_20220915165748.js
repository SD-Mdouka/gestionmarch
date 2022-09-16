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
  const [productList, setProductList] = useState([
    {
      titleProduct: title,
      priceProduct: price,
      tvaProduct: tva,
      adsProduct: ads,
      discountProduct: discount,
      totalProduct: total,
      countProduct: count,
      categoryProduct: category,
    },
  ]);

  const paramsListProd = {
    productList,
    setProductList,
    price,
    tva,
    ads,
    discount,
    title,
    count,
    category,
    total,
  };
  const handelCreate = () => {
    console.log(CreateProduct({ ...paramsListProd }));
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
          CreateProduct({ ...paramsListProd });
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
          CreateProduct({ ...paramsListProd });
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
          CreateProduct({ ...paramsListProd });
        }}
      />
      <button onClick={() => handelCreate()}>Create</button>
    </div>
  );
};

export default Inpute;
