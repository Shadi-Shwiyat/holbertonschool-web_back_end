export default function hasValuesFromArray(set, array) {
  const setArray = Array.from(set);

  const boolean = array.every((element) => setArray.includes(element));

  return boolean;
}
