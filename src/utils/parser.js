export const numberParser = (number) => {
  return new Intl.NumberFormat().format(number);
};
