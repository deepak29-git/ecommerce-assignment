export const getSize = (data, size) => {
  let filteredSize = [];
  if (
    size.s === false &&
    size.m === false &&
    size.l === false &&
    size.xl === false
  ) {
    return data;
  }
  if (size.s) {
    let newSize = data.filter((product) => product.size.toLowerCase() === "s");
    filteredSize.push(...newSize);
  }
  if (size.m) {
    let newSize = data.filter((product) => product.size.toLowerCase() === "m");
    filteredSize.push(...newSize);
  }
  if (size.l) {
    let newSize = data.filter((product) => product.size.toLowerCase() === "l");
    filteredSize.push(...newSize);
  }
  if (size.xl) {
    let newSize = data.filter((product) => product.size.toLowerCase() === "xl");
    filteredSize.push(...newSize);
  }
  return filteredSize;
};
