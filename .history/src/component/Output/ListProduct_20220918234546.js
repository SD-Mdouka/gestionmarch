import React from "react";
import { ReadList } from "../../helpers/CreateProduct";

const ListProduct = ({ productList }) => {
  ReadList();
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
