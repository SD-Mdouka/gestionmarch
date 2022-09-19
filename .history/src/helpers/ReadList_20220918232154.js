export function ReadList(productList) {
  let table = "";
  for (let index = 0; index < productList.length; index++) {
    table = +`
             <tr >
                <td>${index++}</td>
                <td>${productList[index].titleProduct}</td>
                <td>${productList[index].tvaProduct}</td>
                <td>${productList[index].adsProduct}</td>
                <td>${productList[index].discountProduct}</td>
                <td>${productList[index].totalProduct}</td>
                <td>${productList[index].countProduct}</td>
                <td>${productList[index].categoryProduct}</td>
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
