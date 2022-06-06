export const getBrand = (data, brand) => {
  let filteredBrand = [];
  if (brand.TRIPR === false && brand.AUSK === false && brand.BLIVE === false) {
    return data;
  }
  if (brand.TRIPR) {
    let newBrand = data.filter((product) => product.brand === "TRIPR");
    filteredBrand.push(...newBrand);
  }
  if (brand.AUSK) {
    let newBrand = data.filter((product) => product.brand === "AUSK");
    filteredBrand.push(...newBrand);
  }
  if (brand.BLIVE) {
    let newBrand = data.filter((product) => product.brand === "BLIVE");
    filteredBrand.push(...newBrand);
  }
  return filteredBrand;
};
