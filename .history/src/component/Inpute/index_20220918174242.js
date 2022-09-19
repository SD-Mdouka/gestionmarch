import React, { useState, useRef } from "react";
import { CreateProduct } from "../../helpers/CreateProduct";
import InputTotal from "./InputTotal";

const Inpute = ({
  setRender,
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
  CreateProduct,
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
    setProductList(
      CreateProduct(
        title,
        price,
        tva,
        ads,
        discount,
        total,
        count,
        category,
        inputTitle,
        inputPrice,
        inputTva,
        inputAds,
        inputDiscount,
        inputCount,
        inputCategory,
        totalId
      )
    );
  };

  return (
    <div className="input">
      <input
        ref={inputTitle}
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
        ref={inputCount}
        placeholder="Count"
        name="Count"
        type={"number"}
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <input
        ref={inputCategory}
        placeholder="Category"
        name="Category"
        type={"text"}
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <button onClick={handelCreat}>Create</button>
    </div>
  );
};

export default Inpute;
