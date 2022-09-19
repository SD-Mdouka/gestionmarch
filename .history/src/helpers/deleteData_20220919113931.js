export function deleteData(i, productList) {
  for (let index = 0; index < productList.length; index++) {
    if (productList[index] === productList[i]) {
      return console.log("delet   " + [...productList]);
    }
  }
}
