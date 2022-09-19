const totalId = document.getElementById("total");
export function ClearIndput(
  inputTitle,
  inputPrice,
  inputTva,
  inputAds,
  inputDiscount,
  inputCount,
  inputCategory
) {
  inputTitle.current.value = "";
  inputPrice.current.value = "";
  inputTva.current.value = "";
  inputAds.current.value = "";
  inputDiscount.current.value = "";
  inputCount.current.value = "";
  totalId.innerHTML = "";
  inputCategory.current.value = "";
}
