import React from "react";
import { getTotal } from "../../helpers/getTotal";

const InputTotal = ({
  inputPrice,
  inputTva,
  inputAds,
  inputDiscount,
  totalId,
}) => {
  return (
    <div className="price">
      <input
        id="inputPrice"
        placeholder="Price"
        type={"number"}
        name="Price"
        onKeyUp={() => {
          getTotal(
            inputPrice.value,
            inputTva.value,
            inputAds.value,
            inputDiscount.value,
            totalId.innerHTML
          );
        }}
      />
      <input
        id="inputTva"
        placeholder="TVA"
        name="TVA"
        type={"number"}
        onKeyUp={() => {
          getTotal(
            inputPrice.value,
            inputTva.value,
            inputAds.value,
            inputDiscount.value,
            totalId.innerHTML
          );
        }}
      />
      <input
        id="inputAds"
        placeholder="Ads"
        name="Ads"
        type={"number"}
        onKeyUp={() => {
          getTotal(
            inputPrice.value,
            inputTva.value,
            inputAds.value,
            inputDiscount.value,
            totalId.innerHTML
          );
        }}
      />
      <input
        id="inputDiscount"
        placeholder="Discount"
        name="Discount"
        type={"number"}
        onKeyUp={() => {
          getTotal(
            inputPrice.value,
            inputTva.value,
            inputAds.value,
            inputDiscount.value,
            totalId.innerHTML
          );
        }}
      />
      <small id="total"></small>
    </div>
  );
};

export default InputTotal;
