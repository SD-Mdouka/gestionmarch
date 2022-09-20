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
  if (mode === "SerchByTitel") {
    for (let index = 0; index < productList.length; index++) {
      const element = productList[index];
    }
  } else if (mode === "SerchByCategory") {
  }
}
