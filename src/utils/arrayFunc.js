export const duplicateItemsArray = (value, array) => {
  return array.reduce(
    (acumulador, actual) => (actual === value ? acumulador + 1 : acumulador),
    0
  );
};

export const removeArrayDuplicates = (array) => {
  return Array.from(new Set(array));
};

export const removeItemArray = (array, item) => {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index);
  }
  return array;
};
