export default function createEmployeesObject(departmentName, employees) {
  const employeeObject = {
    [departmentName]: [],
  };
  for (const emp of employees) {
    employeeObject[departmentName].push(emp);
  }

  return employeeObject;
}
