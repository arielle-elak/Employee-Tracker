const { returnTop } = require("../../utils/routeApp");

function addDepartment(answer) {
  // TODO: SQL REQUEST: Add Department
  console.log("Added Department: " + answer.addDep1);
  returnTop();
}

function addEmployee() {
  // TODO: SQL REQUST: Add Employee
  console.log("Added Employee: " + answer.addEmp1 + " " + answer.addEmp2);
  returnTop();
}

function addRole() {
  // TODO: SQL REQUEST: Add Role
  console.log("Added Role: " + answer.addRole1);
  returnTop();
}

module.exports = {
  addDepartment,
  addEmployee,
  addRole,
};
