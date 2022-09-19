import React, { useEffect } from "react";
import { ShowProduct } from "../../helpers/CreateProduct";
const ShowProducts = () => {
  let list = ShowProduct();
  let table = "";
  for (let i = 0; i < list.length; i++) {
    table += `
      <tr>
          <td>${i++}</td>
          <td>${list[i].titleProduct}</td>
          <td>${list[i].tvaProduct}</td>
          <td>${list[i].adsProduct}</td>
          <td>${list[i].discountProduct}</td>
          <td>${list[i].totalProduct}</td>
          <td>${list[i].countProduct}</td>
          <td>${list[i].categoryProduct}</td> 
          <td>
              <button id="btnUpdate">Update</button>
          </td>
          <td>
              <button id="btnDelete">Delete</button>
          </td>
        </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = table;
};
const ListProduct = () => {
  useEffect(ShowProducts(), []);
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>tva</th>
            <th>ads</th>
            <th>discount</th>
            <th>total</th>
            <th>category</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
    </>
  );
};

export default ListProduct;
