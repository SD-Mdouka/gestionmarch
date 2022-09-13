import React from "react";

const InputTotal = () => {
  return (
    <div className="price">
      <input placeholder="Price" id="Price" name="Price" type={"number"} />
      <input placeholder="TVA" id="TVA" name="TVA" type={"number"} />
      <input placeholder="Ads" id="Ads" name="Ads" type={"number"} />
      <input
        placeholder="Discount"
        id="Discount"
        name="Discount"
        type={"number"}
      />
      <small id="total">12345</small>
    </div>
  );
};

export default InputTotal;
