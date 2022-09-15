export function getTotal(price, tva, ads, discount, setTotal) {
  if (price !== "") {
    let result = +price + +tva + +ads - +discount;
    setTotal(result);
    return console.log("cal = " + result);
  }
}
