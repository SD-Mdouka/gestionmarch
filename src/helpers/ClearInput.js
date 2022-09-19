export function ClearIndput() {
  let inputTitle = document.getElementById("inputTitle");
  let inputCount = document.getElementById("inputCount");
  let inputCategory = document.getElementById("inputCategory");
  let inputPrice = document.getElementById("inputPrice");
  let inputTva = document.getElementById("inputTva");
  let inputAds = document.getElementById("inputAds");
  let inputDiscount = document.getElementById("inputDiscount");
  let totalId = document.getElementById("total");
  inputTitle.value = "";
  inputPrice.value = "";
  inputTva.value = "";
  inputAds.value = "";
  inputDiscount.value = "";
  inputCount.value = "";
  inputCategory.value = "";
  totalId.style.backgroundColor = "red";
  totalId.innerHTML = "";
}
