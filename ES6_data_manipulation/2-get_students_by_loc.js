export default function getStudentsByLocation(studentArray, city) {
  return studentArray.filter((object) => object.location === city);
}
