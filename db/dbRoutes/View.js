const { returnTop } = require("../../utils/routeApp");

function viewAllDepartments() {
  // TODO: SQL REQUEST: View All Departments
  console.log("Viewing All Departments");
  returnTop();
}

function viewAllRoles() {
  console.log("Viewing All Roles");
  returnTop();
}

// View Employee Routes

function viewEmployeesByDep() {
  // TODO: SQL REQUEST: View All Employees By Department
  console.log("Viewing All Employees by Department");
  returnTop();
}

function viewEmployeesByMan() {
  console.log("Viewing All Employees by Manager");
  returnTop();
}

function viewEmployeesByRole() {
  console.log("Viewing All Employees by Role");
  returnTop();
}

function viewEmployeesBySalary() {
  console.log("Viewing All Employees by Salary");
  returnTop();
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewEmployeesByDep,
  viewEmployeesByMan,
  viewEmployeesByRole,
  viewEmployeesBySalary,
};
