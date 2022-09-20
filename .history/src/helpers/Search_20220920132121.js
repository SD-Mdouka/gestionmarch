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
  if (searchMode == "title") {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].titleProduct.includes(vlaue)) {
        console.log("====================================");
        console.log(i);
        console.log("====================================");
      }
    }
  } else {
  }
}
