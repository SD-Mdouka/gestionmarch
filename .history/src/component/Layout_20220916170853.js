import React, { useState } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
  const [render, setRender] = useState(false);
  const [productList, setProductList] = useState(false);
  // state list object
  return (
    <>
      <Header />
      <Inpute setRender={setRender} productList={setProductList} />
      <OutPute setRender={setRender} productList={productList} />
    </>
  );
};

export default Layout;
