export function getSearch(mode) {
  let inputSerach = document.getElementById("inputSerach");
  if (mode === "SerchByTitel") {
    inputSerach.placeholder = "Serach By Titel";
  } else if (mode === "SerchByCategory") {
    inputSerach.placeholder = "Serach By Category";
  }
  inputSerach.focus();
}

export function SearchData(vlaue, mode, productList) {
  let productLst;
  if (mode === "SerchByTitel") {
    for (let index = 0; index < productList.length; index++) {
      if (productList[index].titleProduct.includes(vlaue)) {
        //  let newPro = {
        //    titleProduct: productList[index].titleProduct,
        //    priceProduct: productList[index].priceProduct,
        //    tvaProduct: productList[index].tvaProduct,
        //    adsProduct: productList[index].adsProduct,
        //    discountProduct: productList[index].discountProduct,
        //    totalProduct: productList[index].totalProduct,
        //    countProduct: productList[index].countProduct,
        //    categoryProduct: productList[index].categoryProduct,
        //  };
        // productLst.push(newPro);
        console.log(
          "element  " +
            productList[index].titleProduct +
            "/" +
            productList[index].priceProduct +
            "/" +
            productList[index].tvaProduct +
            "/" +
            productList[index].adsProduct +
            "/" +
            productList[index].discountProduct +
            "/" +
            productList[index].totalProduct +
            "/" +
            productList[index].categoryProduct
        );
      }
    }
  } else if (mode === "SerchByCategory") {
  }
}
