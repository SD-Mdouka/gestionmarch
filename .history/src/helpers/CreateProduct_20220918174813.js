import { ClearIndput } from "./ClearInput";
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
  category,
  inputTitle,
  inputPrice,
  inputTva,
  inputAds,
  inputDiscount,
  inputCount,
  inputCategory,
  totalId
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
  ClearIndput(
    inputTitle,
    inputPrice,
    inputTva,
    inputAds,
    inputDiscount,
    inputCount,
    inputCategory,
    totalId
  );
  localStorage.setItem("product", JSON.stringify(productList));
  return productList;
}
export function ShowProducts() {
  ClearIndput(
    inputTitle,
    inputPrice,
    inputTva,
    inputAds,
    inputDiscount,
    inputCount,
    inputCategory,
    totalId
  );
  return productList;
}
