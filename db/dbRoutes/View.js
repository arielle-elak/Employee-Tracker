const { returnTop } = require("../../utils/returnTop");

function viewAllDepartments() {
  console.log("Viewing All Departments");
  returnTop();
}

function viewAllRoles() {
  console.log("Viewing All Roles");
}

// View Employee Routes

function viewEmployeesByDep() {
  console.log("Viewing All Employees by Department");
}

function viewEmployeesByMan() {
  console.log("Viewing All Employees by Manager");
}

function viewEmployeesByRole() {
  console.log("Viewing All Employees by Role");
}

function viewEmployeesBySalary() {
  console.log("Viewing All Employees by Salary");
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewEmployeesByDep,
  viewEmployeesByMan,
  viewEmployeesByRole,
  viewEmployeesBySalary,
};
