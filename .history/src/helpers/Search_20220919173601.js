export function getSearch(mode) {
  let inputSerach = document.getElementById("inputSerach");
  if (mode === "SerchByTitel") {
    inputSerach.placeholder = "Serach By Titel";
    console.log(mode);
  } else if (mode === "SerchByCategory") {
    inputSerach.placeholder = "Serach By Category";
    console.log(mode);
  }
}
