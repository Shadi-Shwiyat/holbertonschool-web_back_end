export default function getListStudents() {
  class Students {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }
  }

  // Convert class instances to plain objects using Object.assign
  const student1 = { ...new Students(1, 'Guillaume', 'San Francisco') };
  const student2 = { ...new Students(2, 'James', 'Columbia') };
  const student3 = { ...new Students(5, 'Serena', 'San Francisco') };

  return [student1, student2, student3];
}
