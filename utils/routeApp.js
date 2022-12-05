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
} = require("./prompts");

// Import View Routes
const {
  viewAllDepartments,
  viewAllRoles,
  viewEmployeesByDep,
  viewEmployeesByMan,
  viewEmployeesByRole,
  viewEmployeesBySalary,
} = require("../db/dbRoutes/View");

// Import Add Routes
const { addDepartment, addEmployee, addRole } = require("../db/dbRoutes/Add");

// Import Update Routes
const {
  updateDepartment,
  updateEmployee,
  updateRole,
} = require("../db/dbRoutes/Update");

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
                    inquirer.prompt(topMenuPrompts).then((answer) => {
                      routeApp(answer.topMenu);
                    });
                    break;
                }
              });
              break;
            case "Roles":
              viewAllRoles();
              break;
            case "<= Go Back":
              inquirer.prompt(topMenuPrompts).then((answer) => {
                routeApp(answer.topMenu);
              });
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
              inquirer.prompt(topMenuPrompts).then((answer) => {
                routeApp(answer.topMenu);
              });
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
                // TODO: SQL REQUEST: Update Role
                console.log("Updated Role");
                returnTop();
              });
              break;
            case "<= Go Back":
              inquirer.prompt(topMenuPrompts).then((answer) => {
                routeApp(answer.topMenu);
              });
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
                      console.log("Deleted Department");
                      returnTop();
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
                      console.log("Deleted Employee");
                      // TODO: SQL REQUEST: Delete Employee
                      returnTop();
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
                      console.log("Deleted Role");
                      // TODO: SQL REQUEST: Delete Role
                      returnTop();
                      break;
                  }
                });
              };
              areYouSureRole();
              break;
            case "<= Go Back":
              inquirer.prompt(topMenuPrompts).then((answer) => {
                routeApp(answer.topMenu);
              });
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

module.exports = {
  routeApp,
  returnTop,
};
