export function ReadList(productList) {
  let table = "";
  for (let index = 0; index < productList.length; index++) {
    table = +`
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
    `;
  }
  document.getElementById("tbody").innerHTML = table;
}
