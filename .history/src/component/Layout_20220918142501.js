import React, { useState } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
  const [render, setRender] = useState(false);
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");
  const params = {
    title,
    setTitle,
    count,
    setCount,
    category,
    setCategory,
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
