import React from "react";

const Inpute = () => {
  return (
    <div className="input">
      <input placeholder="Title" id="title" name="title" />
      <div className="price">
        <input placeholder="Price" id="Price" name="Price" />
        <input placeholder="TVA" id="TVA" name="TVA" />
        <input placeholder="Ads" id="Ads" name="Ads" />
        <input placeholder="Discount" id="Discount" name="Discount" />
        <small id="total">12345</small>
      </div>
    </div>
  );
};

export default Inpute;
