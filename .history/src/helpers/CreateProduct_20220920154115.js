let productList;
if (localStorage.product != null) {
  productList = JSON.parse(localStorage.product);
} else {
  productList = [];
}
export function CreateProduct(mode, NbIndex) {
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
  //create product with number the count
  //clean data for input
  if (
    inputTitle.value != "" &&
    inputPrice.value != "" &&
    inputTva.value != "" &&
    inputAds.value != "" &&
    inputDiscount.value != ""
  ) {
    if (mode === "Create") {
      if (newPro.countProduct > 1) {
        for (let i = 0; i < newPro.countProduct; i++) {
          productList.push(newPro);
        }
      } else {
        productList.push(newPro);
      }
      // //save in local storage
      localStorage.setItem("product", JSON.stringify(productList));
      window.location.reload();
    } else if (mode === "Update") {
      productList[NbIndex] = newPro;
      localStorage.setItem("product", JSON.stringify(productList));

      inputCount.style.display = "block";
    }
  }
}
export function ReadList() {
  return productList;
}
