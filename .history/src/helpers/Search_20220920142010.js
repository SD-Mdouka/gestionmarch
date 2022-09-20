let searchMode;
export function getSearch(mode) {
  let inputSerach = document.getElementById("inputSerach");
  if (mode === "SearchByTitle") {
    searchMode = "title";
    inputSerach.placeholder = "Serach By Titel";
  } else {
    searchMode = "category";
    inputSerach.placeholder = "Serach By Category";
  }
  inputSerach.focus();
}

export function SearchData(vlaue, productList) {
  let list = [];
  if (searchMode === "title") {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].titleProduct.includes(vlaue)) {
        console.log(
          productList[i].titleProduct + "...." + productList[i].priceProduct
        );
        //object list product
        // let newProduct = {
        //   titleProduct: productList[i].titleProduct,
        //   priceProduct: productList[i].priceProduct,
        //   tvaProduct: productList[i].tvaProduct,
        //   adsProduct: productList[i].adsProduct,
        //   discountProduct: productList[i].discountProduct,
        //   totalProduct: productList[i].totalProduct,
        //   countProduct: productList[i].countProduct,
        //   categoryProduct: productList[i].categoryProduct,
        // };
        // list.push(newProduct);
        return list;
      } else {
        return productList;
      }
    }
  } else {
  }
}
