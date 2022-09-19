import React, { useEffect } from "react";
import { ReadList } from "../../helpers/CreateProduct";
import { deleteData } from "../../helpers/deleteData";

const ListProduct = () => {
  useEffect(() => {
    ReadList();
  }, []);
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
          {ReadList().map((productList, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{productList.titleProduct}</td>
                <td>{productList.tvaProduct}</td>
                <td>{productList.adsProduct}</td>
                <td>{productList.discountProduct}</td>
                <td>{productList.totalProduct}</td>
                <td>{productList.countProduct}</td>
                <td>{productList.categoryProduct}</td>
                <td>
                  <button id="btnUpdate">Update</button>
                </td>
                <td>
                  <button
                    onClick={() => deleteData(index, productList)}
                    id="btnDelete"
                  >
                    Delete
                  </button>
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
