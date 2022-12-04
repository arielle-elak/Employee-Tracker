const { returnTop } = require("../../utils/returnTop");

function addDepartment(answer) {
  // TODO: SQL REQUEST: Add Department
  console.log("Added Department: " + answer.addDep1);
  returnTop();
}

function addEmployee() {
  returnTop();
}

function addRole() {
  returnTop();
}

module.exports = {
  addDepartment,
  addEmployee,
  addRole,
};
