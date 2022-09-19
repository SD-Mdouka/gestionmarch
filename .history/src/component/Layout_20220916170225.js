import React, { useState } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
  const [render, setRender] = useState(false);
  // state list object
  let productList = JSON.parse(localStorage.product);
  return (
    <>
      <Header />
      <Inpute setRender={setRender} productList={productList} />
      <OutPute setRender={setRender} productList={productList} />
    </>
  );
};

export default Layout;
