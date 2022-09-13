import React from "react";
import Header from "./Header";
import OutPute from "./Output.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <OutPute />
    </>
  );
};

export default Layout;
