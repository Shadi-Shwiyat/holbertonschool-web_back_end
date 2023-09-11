export default function getListStudents() {
  class Students {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }

    toString() {
        return `{ id: ${this.id}, firstName: ${this.firstName}, location: ${this.location} }`
    }
  }

  let student1 = new Students(1, 'Guillame', 'San Francisco');
  let student2 = new Students(2, 'James', 'Columbia');
  let student3 = new Students(5, 'Serena', 'San Francisco');

  return [student1.toString(), student2.toString(), student3.toString()];
}
