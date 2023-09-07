export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {},
    getNumberOfDepartments() {
      let sum = 0;
      for (const departmentName in this.allEmployees) {
        if (Object.prototype.hasOwnProperty.call(this.allEmployees, departmentName)) {
          sum += 1;
        }
      }
      return sum;
    },
  };

  for (const departmentName in employeesList) {
    if (Object.prototype.hasOwnProperty.call(employeesList, departmentName)) {
      report.allEmployees[departmentName] = employeesList[departmentName];
    }
  }

  return report;
}
