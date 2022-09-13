import React, { useState } from "react";

const InputTotal = () => {
  const [price, setPrice] = useState("");
  const [tva, setTva] = useState("");
  const [ads, setAds] = useState("");
  const [discount, setDiscount] = useState("");
  return (
    <div className="price">
      <input
        placeholder="Price"
        type={"number"}
        name="Price"
        value={price}
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
      <small id="total">12345</small>
    </div>
  );
};

export default InputTotal;
