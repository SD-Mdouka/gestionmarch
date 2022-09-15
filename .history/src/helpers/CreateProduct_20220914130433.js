export function CreateProduct(
  price,
  tva,
  ads,
  discount,
  title,
  count,
  category,
  total
) {
  let dataProduct = [];
  let newPro = {
    titleProduct: title,
    priceProduct: price,
    tvaProduct: tva,
    adsProduct: ads,
    discountProduct: discount,
    totalProduct: total,
    countProduct: count,
    categoryProduct: category,
  };
  dataProduct.push(newPro);
  return console.log(dataProduct);
}
