import React, { useState } from "react";
import { getTotal } from "../../helpers/getTotal";

const InputTotal = ({
  price,
  setPrice,
  tva,
  setTva,
  ads,
  setAds,
  discount,
  setDiscount,
  total,
  setTotal,
}) => {
  return (
    <div className="price">
      <input
        placeholder="Price"
        type={"number"}
        name="Price"
        value={price}
        onKeyUp={getTotal()}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        placeholder="TVA"
        name="TVA"
        type={"number"}
        value={tva}
        onChange={(e) => {
          setTva(e.target.value);
        }}
      />
      <input
        placeholder="Ads"
        name="Ads"
        type={"number"}
        value={ads}
        onChange={(e) => {
          setAds(e.target.value);
        }}
      />
      <input
        placeholder="Discount"
        name="Discount"
        type={"number"}
        value={discount}
        onChange={(e) => {
          setDiscount(e.target.value);
        }}
      />
      <small id="total">{total}</small>
    </div>
  );
};

export default InputTotal;
