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
        list.push(productList[i]);
        return list;
      } else {
        return productList;
      }
    }
  } else {
  }
}
