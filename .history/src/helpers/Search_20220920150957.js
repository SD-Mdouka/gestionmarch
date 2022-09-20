let searchMode = "Titel";
export function getSearch(mode) {
  searchMode = "Titel";
  let inputSerach = document.getElementById("inputSerach");
  if (mode === "SearchByTitle") {
    searchMode = "Titel";
  } else {
    searchMode = "Category";
  }
  inputSerach.placeholder = "Serach By " + searchMode;
  inputSerach.focus();
}

export function SearchData(vlaue, productList) {
  let list = [];
  if (searchMode === "title") {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].titleProduct.includes(vlaue)) {
        list.push(productList[i]);
      }
    }
    return list;
  } else {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].categoryProduct.includes(vlaue)) {
        list.push(productList[i]);
      }
    }
    return list;
  }
}
