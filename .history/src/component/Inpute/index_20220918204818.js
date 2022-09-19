import React, { useState, useRef } from "react";
import { ClearIndput } from "../../helpers/ClearInput";
import { CreateProduct } from "../../helpers/CreateProduct";
import InputTotal from "./InputTotal";

const Inpute = ({
  title,
  setTitle,
  count,
  setCount,
  category,
  setCategory,
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
  setProductList,
  inputPrice,
  inputTva,
  inputAds,
  inputDiscount,
  inputTitle,
  inputCount,
  inputCategory,
  totalId,
}) => {
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
    // refference list tottal
    inputPrice,
    inputTva,
    inputAds,
    inputDiscount,
  };
  const handelCreat = () => {
    //object list product
    let productList;
    if (localStorage.product != null) {
      productList = JSON.parse(localStorage.product);
    } else {
      productList = [];
    }
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

    //clear data in input

    productList.push(newPro);
    //save in local storage
    localStorage.setItem("product", JSON.stringify(productList));
    inputTitle.value = "";
    inputPrice.value = "";
    inputTva.value = "";
    inputAds.value = "";
    inputDiscount.value = "";
    inputCount.value = "";
    inputCategory.value = "";
    totalId.style.backgroundColor = "red";
    totalId.innerHTML = "";
    // setProductList(productList);
  };
  return (
    <div className="input">
      <input
        id="inputTitle"
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
        id="inputCount"
        placeholder="Count"
        name="Count"
        type={"number"}
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <input
        id="inputCategory"
        placeholder="Category"
        name="Category"
        type={"text"}
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <button onClick={() => handelCreat()}>Create</button>
    </div>
  );
};

export default Inpute;
