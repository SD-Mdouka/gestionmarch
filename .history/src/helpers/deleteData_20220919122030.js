export function deleteData(i, productList) {
 productList.splice(i, 1);
  localStorage.product = JSON.stringify(productList);
  window.location.reload();
}
