export function deleteData(i, productList) {
  for (let index = 0; index < productList.length; index++) {
    if (productList[index] === productList[i]) {
      productList.splice(i, 0);
      return console.log("delet   " + productList[i].totalProduct);
    }
  }
}
