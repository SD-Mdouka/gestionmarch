let searchMode;

export function getSearch(mode) {
  let inputSerach = document.getElementById("inputSerach");
  if (mode === "SerchByTitel") {
    searchMode = "title";
    inputSerach.placeholder = "Serach By Titel";
  } else if (mode === "SerchByCategory") {
    searchMode = "category";
    inputSerach.placeholder = "Serach By Category";
  }
  inputSerach.focus();
  console.log(searchMode);
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
