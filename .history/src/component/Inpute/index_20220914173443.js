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
  const initialValue = {
    titleProduct: "",
    priceProduct: "",
    tvaProduct: "",
    adsProduct: "",
    discountProduct: "",
    totalProduct: "",
    countProduct: "",
    categoryProduct: "",
  };
  const [productList, setProductList] = useState([]);

  const handelCreate = () => {
    // const paramsListProd = {
    //   productList,
    //   setProductList,
    //   price,
    //   tva,
    //   ads,
    //   discount,
    //   title,
    //   count,
    //   category,
    //   total,
    // };
    let newPro = {
      titleProduct: title,
      priceProduct: price,
      tvaProduct: tva,
      adsProduct: ads,
      discountProduct: discount,
      totalProduct: total,
      countProduct: count,
      categoryProduct: category,
    };
    console.log(productList);

    setProductList((list) => [...list, newPro]);
    localStorage.setItem("product", JSON.stringify(productList));
    // return productList;
    console.log(productList);
    // console.log(CreateProduct({ ...paramsListProd }));
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
      <button type="submit" onClick={handelCreate}>
        Create
      </button>
    </div>
  );
};

export default Inpute;
