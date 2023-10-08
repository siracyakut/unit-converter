export const pxToRem = (pxValue, rootSize) => {
  const rootFontSize = parseFloat(rootSize);
  const remValue = pxValue / rootFontSize;
  return parseFloat(remValue.toFixed(3));
};

export const remToPx = (remValue, rootSize) => {
  const rootFontSize = parseFloat(rootSize);
  return remValue * rootFontSize;
};
