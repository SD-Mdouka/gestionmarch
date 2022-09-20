var inputSerach = document.getElementById("inputSerach");
export function getSearch(mode) {
  if (mode === "SerchByTitel") {
    inputSerach.placeholder = "Serach By Titel";
  } else if (mode === "SerchByCategory") {
    inputSerach.placeholder = "Serach By Category";
  }
  inputSerach.focus();
}

export function SearchData() {
  console.log(inputSerach.vlaue);
}
