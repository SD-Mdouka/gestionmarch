export function getTotal(price, tva, ads, discount) {
  if (price !== "") {
    let result = +price + +tva + +ads - +discount;
    return console.log("cal = " + result);
  }
}
