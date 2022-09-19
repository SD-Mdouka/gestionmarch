export function getTotal(price, tva, ads, discount, totalId) {
  let total = document.getElementById("total");
  if (price !== "") {
    let result = +price + +tva + +ads - +discount;
    total.style.backgroundColor = "green";
    totalId = result;
  } else {
    total.style.backgroundColor = "red";
  }
}
