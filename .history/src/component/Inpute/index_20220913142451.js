import React from "react";

const Inpute = () => {
  return (
    <div className="input">
      <input placeholder="Title" id="title" name="title" type={"text"} />
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
      <input placeholder="Count" id="Count" name="Count" type={"number"} />
      <input
        placeholder="Category"
        id="Category"
        name="Category"
        type={"text"}
      />
      <button type="submit">Create</button>
    </div>
  );
};

export default Inpute;
