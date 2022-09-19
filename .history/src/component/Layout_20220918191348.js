import React, { useState, useRef } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
  // reffercence input
  let inputTitle = document.getElementById("inputTitle");
  let inputCount = document.getElementById("inputCount");
  let inputCategory = document.getElementById("inputCategory");
  let inputPrice = document.getElementById("inputPrice");
  let inputTva = document.getElementById("inputTva");
  let inputAds = document.getElementById("inputAds");
  let inputDiscount = document.getElementById("inputDiscount");
  let totalId = document.getElementById("total");
  //
  const [render, setRender] = useState(false);
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");
  //variable state

  const [price, setPrice] = useState("");
  const [tva, setTva] = useState("");
  const [ads, setAds] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState("");
  //List product
  const [productList, setProductList] = useState([]);
  const params = {
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
    inputPrice,
    inputTva,
    inputAds,
    inputDiscount,
    inputTitle,
    inputCount,
    inputCategory,
    totalId,
    productList,
    setProductList,
  };

  // state list object
  return (
    <>
      <Header />
      <Inpute setRender={setRender} {...params} />
      <OutPute setRender={setRender} />
    </>
  );
};

export default Layout;
