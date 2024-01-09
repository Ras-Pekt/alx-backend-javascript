export default function hasValuesFromArray(setArray, array) {
  let flag = true;
  array.forEach((element) => {
    if (!setArray.has(element)) {
      flag = false;
    }
  });
  return flag;
}
