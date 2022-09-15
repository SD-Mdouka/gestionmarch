import React, { useState } from "react";
import { getTotal } from "../../helpers/getTotal";

const InputTotal = ({
  price,
  tva,
  ads,
  discount,
  total,
  setPrice,
  setTva,
  setAds,
  setDiscount,
  setTotal,
}) => {
  return (
    <div className="price">
      <input
        placeholder="Price"
        type={"number"}
        name="Price"
        value={price}
        onKeyUp={() => getTotal(price, tva, ads, discount, setTotal())}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        placeholder="TVA"
        name="TVA"
        type={"number"}
        value={tva}
        onKeyUp={() => getTotal(price, tva, ads, discount, setTotal())}
        onChange={(e) => {
          setTva(e.target.value);
        }}
      />
      <input
        placeholder="Ads"
        name="Ads"
        type={"number"}
        value={ads}
        onKeyUp={() => getTotal(price, tva, ads, discount, setTotal())}
        onChange={(e) => {
          setAds(e.target.value);
        }}
      />
      <input
        placeholder="Discount"
        name="Discount"
        type={"number"}
        value={discount}
        onKeyUp={() => getTotal(price, tva, ads, discount, setTotal())}
        onChange={(e) => {
          setDiscount(e.target.value);
        }}
      />
      <small id="total">{total}</small>
    </div>
  );
};

export default InputTotal;
