export default function cleanSet(setArray, startString) {
  const finalString = [];
  if (startString && startString.length > 0) {
    setArray.forEach((element) => {
      if (element.startsWith(startString)) {
        finalString.push(element.replace(startString, ''));
      }
    });
    return finalString.join('-');
  }
  return '';
}
