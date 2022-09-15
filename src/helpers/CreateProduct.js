export const CreateProduct = ({
  price,
  tva,
  ads,
  discount,
  title,
  count,
  category,
  total,
  setProductList,
  productList,
}) => {
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
  setProductList((list) => [newPro]);
  localStorage.setItem("product", JSON.stringify(productList));
  return productList;
};
