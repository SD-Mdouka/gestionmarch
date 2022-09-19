import React, { useState, useRef } from "react";
import { ClearIndput } from "../../helpers/ClearInput";
import { CreateProduct } from "../../helpers/CreateProduct";
import InputTotal from "./InputTotal";

const Inpute = ({
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
    inputPrice,
    inputTva,
    inputAds,
    inputDiscount,
    totalId,
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
      titleProduct: inputTitle.value,
      priceProduct: inputPrice.value,
      tvaProduct: inputTva.value,
      adsProduct: inputAds.value,
      discountProduct: inputDiscount.value,
      totalProduct: "",
      countProduct: inputCount.value,
      categoryProduct: inputCategory.value,
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
  };
  return (
    <div className="input">
      <input id="inputTitle" placeholder="Title" name="title" type={"text"} />
      <InputTotal {...params} />
      <input id="inputCount" placeholder="Count" name="Count" type={"number"} />
      <input
        id="inputCategory"
        placeholder="Category"
        name="Category"
        type={"text"}
      />
      <button onClick={() => handelCreat()}>Create</button>
    </div>
  );
};

export default Inpute;
