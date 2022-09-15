export function CreateProduct(
  price,
  tva,
  ads,
  discount,
  title,
  count,
  category
) {
  // let dataProduct = [];
  let newPro = {
    titleProduct: title,
    priceProduct: price,
    tvaProduct: tva,
    adsProduct: ads,
    discountProduct: discount,
    countProduct: count,
    categoryProduct: category,
  };
  return console.log(newPro);
}
