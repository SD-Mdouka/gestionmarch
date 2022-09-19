import React from "react";
import { getTotal } from "../../helpers/getTotal";

const InputTotal = () => {
  return (
    <div className="price">
      <input
        id="inputPrice"
        placeholder="Price"
        type={"number"}
        name="Price"
        onKeyUp={() => {
          getTotal();
        }}
      />
      <input
        id="inputTva"
        placeholder="TVA"
        name="TVA"
        type={"number"}
        onKeyUp={() => {
          getTotal();
        }}
      />
      <input
        id="inputAds"
        placeholder="Ads"
        name="Ads"
        type={"number"}
        onKeyUp={() => {
          getTotal();
        }}
      />
      <input
        id="inputDiscount"
        placeholder="Discount"
        name="Discount"
        type={"number"}
        onKeyUp={() => {
          getTotal();
        }}
      />
      <small id="total"></small>
    </div>
  );
};

export default InputTotal;
