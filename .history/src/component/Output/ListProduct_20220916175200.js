import React from "react";
import { ShowProducts } from "../../helpers/CreateProduct";

const ListProduct = ({ productList }) => {
  // let list = ShowProducts(JSON.parse(localStorage.product));
  // console.log(productList);
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
        <tbody id="tbody">
          {productList.map((list, index) => {
            return (
              <tr key={index}>
                <td>{index++}</td>
                <td>{list.titleProduct}</td>
                <td>{list.tvaProduct}</td>
                <td>{list.adsProduct}</td>
                <td>{list.discountProduct}</td>
                <td>{list.totalProduct}</td>
                <td>{list.countProduct}</td>
                <td>{list.categoryProduct}</td>
                <td>
                  <button id="btnUpdate">Update</button>
                </td>
                <td>
                  <button id="btnDelete">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListProduct;
