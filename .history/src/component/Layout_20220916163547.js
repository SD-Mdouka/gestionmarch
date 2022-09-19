import React, { useState } from "react";
import Header from "./Header";
import OutPute from "./Output";
import Inpute from "./Inpute";

const Layout = () => {
  const [render, setRender] = useState(false);
  return (
    <>
      <Header />
      <Inpute />
      <OutPute setRender={setRender} />
    </>
  );
};

export default Layout;
