import React, { useEffect } from "react";
import { ReadList } from "../../helpers/CreateProduct";
import { deleteData, deleteAllData } from "../../helpers/deleteData";
import { getTotal } from "../../helpers/getTotal";
import { updateData } from "../../helpers/UpdateData";

const ListProduct = ({ btnUpdate, setBtnUpdate }) => {
  useEffect(() => {
    ReadList();
  }, []);
  return (
    <>
      {ReadList().length > 0 ? (
        <button onClick={() => deleteAllData(ReadList())} id="btnUpdate">
          Delete All ({ReadList().length})
        </button>
      ) : (
        ""
      )}
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
                <td>{productList.priceProduct}</td>
                <td>{productList.tvaProduct}</td>
                <td>{productList.adsProduct}</td>
                <td>{productList.discountProduct}</td>
                <td>{productList.totalProduct}</td>
                <td>{productList.categoryProduct}</td>
                <td>
                  <button
                    onClick={() => {
                      updateData(index, ReadList());
                      getTotal();
                      setBtnUpdate(true);
                    }}
                    id="btnUpdate"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteData(index, ReadList())}
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
