import React, { useState, useRef } from "react";

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
      <button onClick={handelCreate}>Create</button>
    </div>
  );
};

export default Inpute;
