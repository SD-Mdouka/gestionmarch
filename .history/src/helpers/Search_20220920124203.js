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
  console.log(searchMode);
}

export function SearchData(vlaue) {
  console.log(vlaue);
}
