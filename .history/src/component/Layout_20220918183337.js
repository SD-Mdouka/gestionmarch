import React, { useState, useRef } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
  console.log("layout");
  // reffercence input
  const inputTitle = useRef(null);
  const inputCount = useRef(null);
  const inputCategory = useRef(null);
  const inputPrice = useRef(null);
  const inputTva = useRef(null);
  const inputAds = useRef(null);
  const inputDiscount = useRef(null);
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
  // console.log("dddd");
  return (
    <>
      <Header />
      <Inpute setRender={setRender} {...params} />
      <OutPute setRender={setRender} {...params} />
    </>
  );
};

export default Layout;
