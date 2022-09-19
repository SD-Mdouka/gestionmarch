// state list object
let productList;
if (localStorage.product != null) {
  productList = JSON.parse(localStorage.product);
} else {
  productList = [];
}
export function CreateProduct(
  title,
  price,
  tva,
  ads,
  discount,
  total,
  count,
  category
) {
  //object list product
  let newPro = {
    titleProduct: title,
    priceProduct: price,
    tvaProduct: tva,
    adsProduct: ads,
    discountProduct: discount,
    totalProduct: total,
    countProduct: count,
    categoryProduct: category,
  };
  productList.push(newPro);
  //save in local storage
  localStorage.setItem("product", JSON.stringify(productList));
  return productList;
}
export function ShowProducts() {
  let table = "";
  for (let i = 0; i < productList.length; i++) {
    table = `
      <tr>
          <td>${i}</td>
          <td>${productList.titleProduct}</td>
          <td>${productList.tvaProduct}</td>
          <td>${productList.adsProduct}</td>
          <td>${productList.discountProduct}</td>
          <td>${productList.totalProduct}</td>
          <td>${productList.countProduct}</td>
          <td>${productList.categoryProduct}</td> 
          <td>
              <button id="btnUpdate">Update</button>
          </td>
          <td>
              <button id="btnDelete">Delete</button>
          </td>
        </tr>
    `;
    table = productList[i];
  }
  document.getElementById("tbody").innerHTML = table;
}
