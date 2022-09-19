export function getTotal() {
  let total = document.getElementById("total");
  let inputPrice = document.getElementById("inputPrice");
  let inputTva = document.getElementById("inputTva");
  let inputAds = document.getElementById("inputAds");
  let inputDiscount = document.getElementById("inputDiscount");
  if (inputPrice.value !== "") {
    let result =
      +inputPrice.value +
      +inputTva.value +
      +inputAds.value -
      +inputDiscount.value;
    total.style.backgroundColor = "green";
    total.innerHTML = result;
  } else {
    total.style.backgroundColor = "red";
  }
}
