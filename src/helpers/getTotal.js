export function getTotal(price, tva, ads, discount) {
  let total = document.getElementById("total");
  if (price !== "") {
    let result = +price + +tva + +ads - +discount;
    total.style.backgroundColor = "green";
    return result;
  } else {
    total.style.backgroundColor = "red";
  }
}
