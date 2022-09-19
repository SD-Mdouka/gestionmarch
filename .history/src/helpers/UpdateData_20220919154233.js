export function updateData(i, productList) {
  let inputTitle = document.getElementById("inputTitle");
  let inputCount = document.getElementById("inputCount");
  let inputCategory = document.getElementById("inputCategory");
  let inputPrice = document.getElementById("inputPrice");
  let inputTva = document.getElementById("inputTva");
  let inputAds = document.getElementById("inputAds");
  let inputDiscount = document.getElementById("inputDiscount");
  inputTitle.value = productList[i].titleProduct;
  inputPrice.value = productList[i].priceProduct;
  inputTva.value = productList[i].tvaProduct;
  inputAds.value = productList[i].adsProduct;
  inputDiscount.value = productList[i].discountProduct;
  inputCategory.value = productList[i].categoryProduct;
  inputCount.style.display = "none";
  document.scroll({
    top: 0,
    behavior: "smooth",
  });
}
