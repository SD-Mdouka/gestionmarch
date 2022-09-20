export function getSearch(mode) {
  let inputSerach = document.getElementById("inputSerach");
  if (mode === "SerchByTitel") {
    inputSerach.placeholder = "Serach By Titel";
  } else if (mode === "SerchByCategory") {
    inputSerach.placeholder = "Serach By Category";
  }
  inputSerach.focus();
}

export function SearchData(vlaue, mode) {
  if (mode === "SerchByTitel") {
  } else if (mode === "SerchByCategory") {
  }
}
