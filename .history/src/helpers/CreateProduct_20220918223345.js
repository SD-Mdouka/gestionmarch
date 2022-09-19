let inputTitle = document.getElementById("inputTitle");
let inputCount = document.getElementById("inputCount");
let inputCategory = document.getElementById("inputCategory");
let inputPrice = document.getElementById("inputPrice");
let inputTva = document.getElementById("inputTva");
let inputAds = document.getElementById("inputAds");
let inputDiscount = document.getElementById("inputDiscount");
let totalId = document.getElementById("total");
export function CreateProduct() {
  // state list object
  let productList;
  if (localStorage.product != null) {
    productList = JSON.parse(localStorage.product);
  } else {
    productList = [];
  }
  //object list product
  let newPro = {
    titleProduct: inputTitle.value,
    priceProduct: inputPrice.value,
    tvaProduct: inputTva.value,
    adsProduct: inputAds.value,
    discountProduct: inputDiscount.value,
    totalProduct: totalId.innerHTML,
    countProduct: inputCount.value,
    categoryProduct: inputCategory.value,
  };

  productList.push(newPro);
  //save in local storage
  localStorage.setItem("product", JSON.stringify(productList));
  return productList;
}
export function ShowProducts() {
  return "";
}
