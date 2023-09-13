export default function cleanSet(set, startString) {
  let returnString = '';
  let suffix = null;

  if (Array.isArray(startString)) {
    return returnString;
  }

  set.forEach((str) => {
    if (str !== undefined && str.includes(startString) && startString !== '') {
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

// console.log(cleanSet(new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']), 'id-'));
// console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
// console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana'])));
// console.log(cleanSet(new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-'])));
// console.log(cleanSet(new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']), []));
