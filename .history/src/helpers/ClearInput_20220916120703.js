export function ClearIndput(
  inputTitle,
  inputPrice,
  inputTva,
  inputAds,
  inputDiscount,
  inputCount,
  inputCategory,
  totalId
) {
  inputTitle.current.value = "";
  inputPrice.current.value = "";
  inputTva.current.value = "";
  inputAds.current.value = "";
  inputDiscount.current.value = "";
  inputCount.current.value = "";
  inputCategory.current.value = "";
  totalId.style.backgroundColor = "red";
}
