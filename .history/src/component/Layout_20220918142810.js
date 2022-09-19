import React, { useState } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
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
  };
  // const [productList, setProductList] = useState([]);
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
