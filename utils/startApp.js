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
  updatePrompts,
  updateDepPrompts,
  updateEmpPrompts,
  updateEmpFName,
  updateEmpLName,
  updateEmpDep,
  updateEmpRole,
  updateEmpMan,
  updateEmpSal,
  updateRolePrompts,
  // Delete Prompts
  deletePrompts,
  deleteDepPrompts,
  deleteEmpPrompts,
  deleteRolePrompts,
} = require("./prompts");

// Import inquirer
const inquirer = require("inquirer");

// 1) Start the app
const startApp = () => {
  console.log(`Welcome to the Employee Tracker!`);
  inquirer.prompt(topMenuPrompts).then((answer) => {
    routeApp(answer.topMenu);
  });
};

// Choose how to route the inquirer
const routeApp = (route) => {
  switch (route) {
    // 2) VIEW MENU
    case "View":
      inquirer.prompt(viewPrompts).then((answer) => {
        switch (answer.viewP) {
          case "Departments":
            console.log("SQL REQUEST: View All Departments");
            // TODO: SQL REQUEST: View All Departments
            break;
          case "Employees":
            // 2a) VIEW Employees
            inquirer.prompt(viewEmployees).then((answer) => {
              switch (answer.viewEmp) {
                case "By Department":
                  console.log("SQL REQUEST: View All Employees By Department");
                  // TODO: SQL REQUEST: View All Employees By Department
                  break;
                case "By Manager":
                  console.log("SQL REQUEST: View All Employees By Manager");
                  // TODO: SQL REQUEST: View All Employees By Manager
                  break;
                case "By Role":
                  console.log("SQL REQUEST: View All Employees By Role");
                  // TODO: SQL REQUEST: View All Employees By Role
                  break;
                case "By Salary":
                  console.log("SQL REQUEST: View All Employees By Salary");
                  // TODO: SQL REQUEST: View All Employees By Salary
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
            console.log("SQL REQUEST: View All Roles");
            // TODO: SQL REQUEST: View All Roles
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
              console.log(answer.addDep1);
              // TODO: SQL REQUEST: Add Department
            });
            break;
          case "An Employee":
            // 3b) ADD Employee
            console.log("Add an Employee");
            inquirer.prompt(addEmpPrompts).then((answer) => {
              console.log(
                "First Name: " + answer.addEmp1 + "\n" +
                "Last Name: " + answer.addEmp2 + "\n" +
                "Role: " + answer.addEmp3 + "\n" +
                "Manager " + answer.addEmp4 + "\n" +
                "Department" + answer.addEmp5 + "\n"
              );
              // TODO: SQL REQUEST: Add Employee
            });
            break;
          case "A Role":
            // 3c) ADD Role
            console.log("Add a Role");
            inquirer.prompt(addRolePrompts).then((answer) => {
              console.log(answer.addRole1);
              // TODO: SQL REQUEST: Add Role
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
              console.log(
                "Current Department: " +
                  answer.updateDep1 +
                  "\n" +
                  "New Department: " +
                  answer.updateDep2 +
                  "\n"
              );
              // TODO: SQL REQUEST: Update Department
            });
            break;
          case "An Employee":
            // 4b) UDPATE Employee
            console.log("Update an Employee");
            inquirer.prompt(updateEmpPrompts).then((answer) => {
              console.log(
                "Employee to Update: " +
                  answer.updateEmp1 +
                  "\n" +
                  "To Update: " +
                  answer.updateEmp2
              );

              // Create array of prompts to ask from updateEmp2
              const choices = answer.updateEmp2;
              const prompts = [];

              if (choices.includes("First Name")) {
                prompts.push("updateEmpFName");
              };

              if (choices.includes("Last Name")) {
                prompts.push("updateEmpLName");
              };

              if (choices.includes("Role")) {
                prompts.push("updateEmpRole");
              };

              if (choices.includes("Department")) {
                prompts.push("updateEmpDep");
              };

              if (choices.includes("Manager")) {
                prompts.push("updateEmpMan");
              };

              if (choices.includes("Salary")) {
                prompts.push("updateEmpSal");
              };

              console.log("Functions to Run: " + prompts);
            });
            // TODO: SQL REQUEST: Update Employee by Cycling Through const prompts array.
            break;
          case "A Role":
            // 4c) UPDATE Role
            console.log("Update a Role");
            inquirer.prompt(updateRolePrompts).then((answer) => {
              console.log(
                "Current Role: " + answer.updateRole1 + "\n" +
                "New Role : " + answer.updateRole2)
              // TODO: SQL REQUEST: Update Role
            })
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
                console.log("Department to Delete: " + answer.deleteDep1)
                console.log("Are You Sure?: " + answer.deleteDep2)
                switch (answer.deleteDep2) {
                  case "No":
                    areYouSureDep();
                    break;
                  case "Yes":
                    // TODO: SQL REQUEST: Delete Department
                    break;
                };
              });
            };
            areYouSure();
            break;
          case "An Employee":
            // 5b) DELETE Employee
            console.log("Delete an Employee");
            const areYouSureEmp = () => {
              inquirer.prompt(deleteEmpPrompts).then((answer) => {
                console.log("Employee to Delete: " + answer.deleteEmp1)
                console.log("Are You Sure?: " + answer.deleteEmp2)
                switch (answer.deleteEmp2) {
                  case "No":
                    areYouSureEmp();
                    break;
                  case "Yes":
                    // TODO: SQL REQUEST: Delete Employee
                    break;
                };
              });
            };
            break;
          case "A Role":
            // 5c) DELETE Role
            console.log("Delete a Role");
            const areYouSureRole = () => {
              inquirer.prompt(deleteRolePrompts).then((answer) => {
                console.log("Role to Delete: " + answer.deleteRole1)
                console.log("Are You Sure?: " + answer.deleteRole2)
                switch (answer.deleteRole2) {
                  case "No":
                    areYouSureRole();
                    break;
                  case "Yes":
                    // TODO: SQL REQUEST: Delete Role
                    break;
                };
              });
            };
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
};

module.exports = startApp;
