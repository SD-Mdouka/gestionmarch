import React, { useState, useRef } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
  const [productList, setProductList] = useState([]);

  const params = {
    inputPrice,
    inputTva,
    inputAds,
    inputDiscount,
    inputTitle,
    inputCount,
    inputCategory,
    totalId,
  };

  // state list object
  return (
    <>
      <Header />
      <Inpute {...params} />
      <OutPute />
    </>
  );
};

export default Layout;
