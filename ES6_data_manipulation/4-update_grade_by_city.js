export default function getStudentsByLocation(studentArray, city, newGrades) {
  const sortedArray = studentArray.filter((object) => object.location === city);
  // console.log(sortedArray);
  // console.log(sortedArray.id);

  for (const gradeObject of newGrades) {
    for (const student of sortedArray) {
      if (gradeObject.studentId === student.id) {
        student.grade = gradeObject.grade;
      }
    }
  }

  return sortedArray.map((object) => ({
    id: object.id,
    firstName: object.firstName,
    location: object.location,
    grade: object.grade || 'N/A',
  }));
}
