export function ClearIndput(
  inputTitle,
  inputPrice,
  inputTva,
  inputAds,
  inputDiscount,
  total,
  inputCount,
  inputCategory
) {
  inputTitle.current.value = "";
  inputPrice.current.value = "";
  inputTva.current.value = "";
  inputAds.current.value = "";
  inputDiscount.current.value = "";
  setTotal("");
  inputCount.current.value = "";
  inputCategory.current.value = "";
}
