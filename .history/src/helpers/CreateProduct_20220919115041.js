let productList;
if (localStorage.product != null) {
  productList = JSON.parse(localStorage.product);
} else {
  productList = [];
}
export function CreateProduct() {
  // input data product
  let inputTitle = document.getElementById("inputTitle");
  let inputCount = document.getElementById("inputCount");
  let inputCategory = document.getElementById("inputCategory");
  let inputPrice = document.getElementById("inputPrice");
  let inputTva = document.getElementById("inputTva");
  let inputAds = document.getElementById("inputAds");
  let inputDiscount = document.getElementById("inputDiscount");
  let totalId = document.getElementById("total");
  // // state list object

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

  // //save in local storage
  localStorage.setItem("product", JSON.stringify(productList));
  window.location.reload();
}
export function ReadList() {
  return productList;
}
export function deleteData(i) {
  productList.splice(i, 0);
  console.log(productList[i]);
}
