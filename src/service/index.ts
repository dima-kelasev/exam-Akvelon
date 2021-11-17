export const filteredNumbers = (array: any) => {
  const exempleArray = Array.from(Array(100).keys());
  const newNumber = exempleArray.filter((el) => {
    return !array.includes(el);
  });
  return newNumber;
};
