export default function cleanSet(set, startString) {
  let returnString = '';
  let suffix = null;

  set.forEach((str) => {
    if (str.includes(startString) && startString !== '') {
      const index = str.indexOf(startString);
      suffix = str.slice(index + startString.length);
      if (returnString === '') {
        returnString += suffix;
      } else {
        returnString += `-${suffix}`;
      }
    }
  });

  return returnString;
}
