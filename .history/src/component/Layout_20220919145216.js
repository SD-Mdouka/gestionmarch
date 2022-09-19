import React, { useState } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
  // reffercence input
  // let inputTitle = document.getElementById("inputTitle");
  // let inputCount = document.getElementById("inputCount");
  // let inputCategory = document.getElementById("inputCategory");
  // let inputPrice = document.getElementById("inputPrice");
  // let inputTva = document.getElementById("inputTva");
  // let inputAds = document.getElementById("inputAds");
  // let inputDiscount = document.getElementById("inputDiscount");
  // let totalId = document.getElementById("total");
  //
  //List product
  const [btnUpdate, setBtnUpdate] = useState(false);

  const params = {
    // inputPrice,
    // inputTva,
    // inputAds,
    // inputDiscount,
    // inputTitle,
    // inputCount,
    // inputCategory,
    // totalId,
    btnUpdate,
    setBtnUpdate,
  };

  // state list object
  return (
    <>
      <Header />
      <Inpute {...params} />
      <OutPute {...params} />
    </>
  );
};

export default Layout;
