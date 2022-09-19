import React, { useEffect } from "react";
// import { ShowProducts } from "../../helpers/CreateProduct";
const ShowProducts = () => {
  let table = "";
  for (let i = 0; i < productList.length; i++) {
    table += `
      <tr>
          <td>${i++}</td>
          <td>${productList[i].titleProduct}</td>
          <td>${productList[i].tvaProduct}</td>
          <td>${productList[i].adsProduct}</td>
          <td>${productList[i].discountProduct}</td>
          <td>${productList[i].totalProduct}</td>
          <td>${productList[i].countProduct}</td>
          <td>${productList[i].categoryProduct}</td> 
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
