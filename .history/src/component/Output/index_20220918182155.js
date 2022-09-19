import React from "react";
import ListProduct from "./ListProduct";
import { ShowProducts } from "../../helpers/CreateProduct";

const OutPute = () => {
  console.log("dddd");
  return (
    <div className="output">
      <div className="searchBlock">
        <input
          placeholder="Searche"
          id="Searche"
          name="Searche"
          type={"text"}
        />
        <div className="btnSearch">
          <button id="SearchByTitle">Search By Title</button>
          <button id="SearchByCategory">Search By Category</button>
        </div>
        {/* <ListProduct /> */}
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
            {ShowProducts().map((list, index) => {
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
      </div>
    </div>
  );
};

export default OutPute;
