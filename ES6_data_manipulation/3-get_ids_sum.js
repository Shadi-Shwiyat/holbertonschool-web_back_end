export default function getStudentIdsSum(studentArray) {
  const sum = studentArray.reduce((acc, cur) => acc + cur.id, 0);
  return sum;
}
