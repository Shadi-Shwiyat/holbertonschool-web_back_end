export default function getListStudentIds(studentArray) {
  const idArray = [];

  for (const object of studentArray) {
    for (const key in object) {
      if (key === 'id') {
        // console.log(object[key]);
        idArray.push(object[key]);
      }
    }
  }
  return idArray;
}
