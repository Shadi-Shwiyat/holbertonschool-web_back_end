export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    const newString = appendString + idx;
    newArray.push(newString);
  }

  return newArray;
}
