// Import inquirer
const inquirer = require("inquirer");

// Import utilities for asking prompts.
const {
  // Main Menu
  topMenuPrompts,
  // View Prompts
  viewPrompts,
  viewEmployees,
  // Add Prompts
  addPrompts,
  addDepPrompts,
  addEmpPrompts,
  addRolePrompts,
  // Update Prompts
  updateEmpPrompts,
  updatePrompts,
  updateDepPrompts,
  updateRolePrompts,
  // Delete Prompts
  deletePrompts,
  deleteDepPrompts,
  deleteEmpPrompts,
  deleteRolePrompts,
} = require("./utils/prompts");

// 1) Start the app
const startApp = () => {
  console.log(`Welcome to the Employee Tracker!`);
  routeApp();
};

// Choose how to route the inquirer
const routeApp = () => {
  inquirer.prompt(topMenuPrompts).then((answer) => {
    switch (answer.topMenu) {
      // 2) VIEW MENU
      case "View":
        inquirer.prompt(viewPrompts).then((answer) => {
          switch (answer.viewP) {
            case "Departments":
              viewAllDepartments();
              break;
            case "Employees":
              // 2a) VIEW Employees
              inquirer.prompt(viewEmployees).then((answer) => {
                switch (answer.viewEmp) {
                  case "By Department":
                    viewEmployeesByDep();
                    break;
                  case "By Manager":
                    viewEmployeesByMan();
                    break;
                  case "By Role":
                    viewEmployeesByRole();
                    break;
                  case "By Salary":
                    viewEmployeesBySalary();
                    break;
                  case "<= Go Back":
                    routeApp();
                    break;
                }
              });
              break;
            case "Roles":
              viewAllRoles();
              break;
            case "<= Go Back":
              routeApp();
              break;
          }
        });
        break;
      // 3) ADD MENU
      case "Add":
        inquirer.prompt(addPrompts).then((answer) => {
          switch (answer.addP) {
            case "A Department":
              // 3a) ADD Department
              console.log("Add a Department");
              inquirer.prompt(addDepPrompts).then((answer) => {
                addDepartment(answer);
              });
              break;
            case "An Employee":
              // 3b) ADD Employee
              console.log("Add an Employee");
              inquirer.prompt(addEmpPrompts).then((answer) => {
                addEmployee(answer);
              });
              break;
            case "A Role":
              // 3c) ADD Role
              console.log("Add a Role");
              inquirer.prompt(addRolePrompts).then((answer) => {
                addRole(answer);
              });
              break;
            case "<= Go Back":
              routeApp();
              break;
          }
        });
        break;
      // 4) UPDATE
      case "Update":
        inquirer.prompt(updatePrompts).then((answer) => {
          switch (answer.updateP) {
            case "A Department":
              // 4a) UDPATE Department
              console.log("Update a Department");
              inquirer.prompt(updateDepPrompts).then((answer) => {
                updateDepartment(answer);
              });
              break;
            case "An Employee":
              // 4b) UDPATE Employee
              console.log("Update an Employee");
              inquirer.prompt(updateEmpPrompts).then((answers) => {
                updateEmployee(answers);
              });
              break;
            case "A Role":
              // 4c) UPDATE Role
              console.log("Update a Role");
              inquirer.prompt(updateRolePrompts).then((answer) => {
                console.log(
                  "Current Role: " +
                    answer.updateRole1 +
                    "\n" +
                    "New Role : " +
                    answer.updateRole2
                );
                updateRole(answer);
              });
              break;
            case "<= Go Back":
              routeApp();
              break;
          }
        });
        break;
      // 5) DELETE
      case "Delete":
        inquirer.prompt(deletePrompts).then((answer) => {
          switch (answer.deleteP) {
            case "A Department":
              // 5a) DELETE Department
              console.log("Delete a Department");
              const areYouSureDep = () => {
                inquirer.prompt(deleteDepPrompts).then((answer) => {
                  console.log("Department to Delete: " + answer.deleteDep1);
                  console.log("Are You Sure?: " + answer.deleteDep2);
                  switch (answer.deleteDep2) {
                    case "No":
                      areYouSureDep();
                      break;
                    case "Yes":
                      // TODO: SQL REQUEST: Delete Department
                      deleteDepartment(answer);
                      break;
                  }
                });
              };
              areYouSureDep();
              break;
            case "An Employee":
              // 5b) DELETE Employee
              console.log("Delete an Employee");
              const areYouSureEmp = () => {
                inquirer.prompt(deleteEmpPrompts).then((answer) => {
                  console.log("Employee to Delete: " + answer.deleteEmp1);
                  console.log("Are You Sure?: " + answer.deleteEmp2);
                  switch (answer.deleteEmp2) {
                    case "No":
                      areYouSureEmp();
                      break;
                    case "Yes":
                      deleteEmployee(answer);
                      break;
                  }
                });
              };
              areYouSureEmp();
              break;
            case "A Role":
              // 5c) DELETE Role
              console.log("Delete a Role");
              const areYouSureRole = () => {
                inquirer.prompt(deleteRolePrompts).then((answer) => {
                  console.log("Role to Delete: " + answer.deleteRole1);
                  console.log("Are You Sure?: " + answer.deleteRole2);
                  switch (answer.deleteRole2) {
                    case "No":
                      areYouSureRole();
                      break;
                    case "Yes":
                      deleteRole(answer);
                      break;
                  }
                });
              };
              areYouSureRole();
              break;
            case "<= Go Back":
              routeApp();
              break;
          }
        });
        break;
    }
  });
};

// Return to top menu or end the app
const returnTop = () => {
  inquirer
    .prompt({
      type: "list",
      name: "returntoTop",
      message: "Would you like to perform another action?",
      choices: ["Yes", "No"],
    })
    .then((answer) => {
      switch (answer.returntoTop) {
        case "Yes":
          routeApp();
          break;
        case "No":
          console.log(
            "Thanks for using!\nYou will find a log of changes made in the 'session_log' file.\nYou may now type CTRL + C to end this session.\nTo start again, type 'node server'."
          );
          break;
      }
    });
};

// SQL Functions

// ADD
function addDepartment(answer) {
  // TODO: SQL REQUEST: Add Department
  console.log("Added Department: " + answer.addDep1);
  returnTop();
}

function addEmployee(answer) {
  // TODO: SQL REQUST: Add Employee
  console.log("Added Employee: " + answer.addEmp1 + " " + answer.addEmp2);
  returnTop();
}

function addRole(answer) {
  // TODO: SQL REQUEST: Add Role
  console.log("Added Role: " + answer.addRole1);
  returnTop();
}

// UPDATE
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
  console.log(
    `Updated Department from ` + answer.updateDep1 + ` to ` + answer.updateDep2
  );
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

function updateRole(answer) {
  console.log(
    "Current Role: " +
      answer.updateRole1 +
      "\n" +
      "New Role: " +
      answer.updateRole2 +
      "\n"
  );
  // TODO: SQL REQUEST: Update Department
  console.log(
    `Updated Role from ` + answer.updateRole1 + ` to ` + answer.updateRole2
  );
  returnTop();
}

// VIEW
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

// DELETE

function deleteEmployee(answer) {
  console.log("Deleted Employee: " + answer.deleteEmp1);
  returnTop();
}

function deleteDepartment(answer) {
  console.log("Deleted Department: " + answer.deleteDep1);
  returnTop();
}

function deleteRole(answer) {
  console.log("Deleted Role: " + answer.deleteRole1);
  returnTop();
}

module.exports = {
  startApp,
  routeApp,
};
