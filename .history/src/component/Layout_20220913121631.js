import React from "react";
import Header from "./Header";
import OutPute from "./Output.js";

const Layout = ({ chieldren }) => {
  return (
    <>
      <Header />
      {chieldren} <OutPute />
    </>
  );
};

export default Layout;
