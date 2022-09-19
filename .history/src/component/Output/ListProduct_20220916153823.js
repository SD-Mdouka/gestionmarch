import React from "react";
import { ShowProducts } from "../../helpers/CreateProduct";

const ListProduct = () => {
  console.log(ShowProducts());
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
          {ShowProducts().map((list) => {
            return (
              <tr>
                <td>1</td>
                <td>{list.titleProduct}</td>
                <td>1000</td>
                <td>20</td>
                <td>10</td>
                <td>5</td>
                <td>1200</td>
                <td>telephone</td>
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
