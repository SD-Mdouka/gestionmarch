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
  inputSerach.vlaue = "";
}

export function SearchData(vlaue, productList) {
  let list = [];
  for (let i = 0; i < productList.length; i++) {
    if (searchMode === "Titel") {
      if (productList[i].titleProduct.includes(vlaue)) {
        list.push(productList[i]);
      }
    } else {
      if (productList[i].categoryProduct.includes(vlaue)) {
        list.push(productList[i]);
      }
    }
    return list;
  }
}
