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
  ShowProducts();
  return productList;
}
export function ShowProducts() {
  let table = [];
  for (let i = 0; i < productList.length; i++) {
    table.push(productList[i]);
  }
  // document.getElementById("tbody").innerHTML = table;
  return table;
}
