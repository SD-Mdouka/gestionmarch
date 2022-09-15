import React from "react";
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
        onKeyUp={() => {
          getTotal(price, tva, ads, discount);
          setTotal(getTotal(price, tva, ads, discount));
        }}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        placeholder="TVA"
        name="TVA"
        type={"number"}
        value={tva}
        onKeyUp={() => {
          setTotal(getTotal(price, tva, ads, discount));
        }}
        onChange={(e) => {
          setTva(e.target.value);
        }}
      />
      <input
        placeholder="Ads"
        name="Ads"
        type={"number"}
        value={ads}
        onKeyUp={() => {
          setTotal(getTotal(price, tva, ads, discount));
        }}
        onChange={(e) => {
          setAds(e.target.value);
        }}
      />
      <input
        placeholder="Discount"
        name="Discount"
        type={"number"}
        value={discount}
        onKeyUp={() => {
          setTotal(getTotal(price, tva, ads, discount));
        }}
        onChange={(e) => {
          setDiscount(e.target.value);
        }}
      />
      <small id="total">{total}</small>
    </div>
  );
};

export default InputTotal;
