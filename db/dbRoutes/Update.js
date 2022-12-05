const { returnTop } = require("../../utils/routeApp");

function updateDepartment(answer) {
  console.log(
    "Current Department: " +
      answer.updateDep1 +
      "\n" +
      "New Department: " +
      answer.updateDep2 +
      "\n"
  );
  // TODO: SQL REQUEST: Update Department
  console.log(`Updated Department from ${answer.Dep1} to ${answer.Dep2}`);
  returnTop();
}

function updateEmployee(answers) {
  const employee = answers.updateEmp1;
  const firstName = answers.updateEmpFName;
  const lastName = answers.updateEmpLName;
  const department = answers.updateEmpDep;
  const role = answers.updateEmpRole;
  const manager = answers.updateEmpMan;
  const salary = answers.updateEmpSal;

  console.log(
    `Updated Employee: ${employee}\nNew First Name: ${firstName}\nNew Last Name: ${lastName}\nNew Department: ${department}\nNew Role: ${role}\nNew Manager: ${manager}\nNew Salary: ${salary}`
  );
  returnTop();
}

function updateRole() {}

module.exports = {
  updateDepartment,
  updateEmployee,
  updateRole,
};
