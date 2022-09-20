let searchMode = "title";

export function getSearch() {
  let inputSerach = document.getElementById("inputSerach");
  if (mode === "SerchByTitel") {
    inputSerach.placeholder = "Serach By Titel";
  } else if (mode === "SerchByCategory") {
    inputSerach.placeholder = "Serach By Category";
  }
  inputSerach.focus();
}

// export function SearchData(vlaue, mode, productList) {
//   let productLst = [];
//   if (mode === "SerchByTitel") {
//     for (let index = 0; index < productList.length; index++) {
//       if (productList[index].titleProduct.includes(vlaue)) {
//         let newProduit = {
//           titleProduct: productList[index].titleProduct,
//           priceProduct: productList[index].priceProduct,
//           tvaProduct: productList[index].tvaProduct,
//           adsProduct: productList[index].adsProduct,
//           discountProduct: productList[index].discountProduct,
//           totalProduct: productList[index].totalProduct,
//           countProduct: productList[index].countProduct,
//           categoryProduct: productList[index].categoryProduct,
//         };
//         productLst.push(newProduit);
//         return productLst;
//       } else {
//         return productList;
//       }
//     }
//   } else if (mode === "SerchByCategory") {
//   }
// }
