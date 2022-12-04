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
  updateRolePrompts,
  // Delete Prompts
  deletePrompts,
  deleteDepPrompts,
  deleteEmpPrompts,
  deleteRolePrompts,
} = require("./prompts");

// Import utility for gettinganswers for Employee update
const getAnswers = require("./getAnswers");

const { returnTop } = require("./returnTop");

// Import inquirer
const inquirer = require("inquirer");

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
            console.log("SQL REQUEST: View All Departments");
            // TODO: SQL REQUEST: View All Departments
            console.log("Viewing All Departments")
            returnTop();
            break;
          case "Employees":
            // 2a) VIEW Employees
            inquirer.prompt(viewEmployees).then((answer) => {
              switch (answer.viewEmp) {
                case "By Department":
                  console.log("SQL REQUEST: View All Employees By Department");
                  // TODO: SQL REQUEST: View All Employees By Department
                  console.log("Viewing All Employees by Department")
                  returnTop();
                  break;
                case "By Manager":
                  console.log("SQL REQUEST: View All Employees By Manager");
                  // TODO: SQL REQUEST: View All Employees By Manager
                  console.log("Viewing All Employees by Manager")
                  returnTop();
                  break;
                case "By Role":
                  console.log("SQL REQUEST: View All Employees By Role");
                  // TODO: SQL REQUEST: View All Employees By Role
                  console.log("Viewing All Employees by Role")
                  returnTop();
                  break;
                case "By Salary":
                  console.log("SQL REQUEST: View All Employees By Salary");
                  // TODO: SQL REQUEST: View All Employees By Salary
                  console.log("Viewing All Employees by Salary")
                  returnTop();
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
            console.log("Viewing All Roles")
            returnTop();
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
              console.log("Added Department")
              returnTop();
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
              console.log("Added Employee")
              returnTop();
            });
            break;
          case "A Role":
            // 3c) ADD Role
            console.log("Add a Role");
            inquirer.prompt(addRolePrompts).then((answer) => {
              console.log(answer.addRole1);
              // TODO: SQL REQUEST: Add Role
              console.log("Added Role")
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
              console.log("Updated Department")
              returnTop();
            });

            break;
          case "An Employee":
            // 4b) UDPATE Employee
            console.log("Update an Employee");
            // Function to get answers from employee prompts
            getAnswers();
            break;
          case "A Role":
            // 4c) UPDATE Role
            console.log("Update a Role");
            inquirer.prompt(updateRolePrompts).then((answer) => {
              console.log(
                "Current Role: " + answer.updateRole1 + "\n" +
                "New Role : " + answer.updateRole2)
              // TODO: SQL REQUEST: Update Role
              console.log("Updated Role")
              returnTop();
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
                    console.log("Deleted Department")
                    returnTop();
                    break;
                };
              });
            };
            areYouSureDep();
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
                    console.log("Deleted Employee")
                    // TODO: SQL REQUEST: Delete Employee
                    returnTop();
                    break;
                };
              });
            };
            areYouSureEmp();
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
                    console.log("Deleted Role")
                    // TODO: SQL REQUEST: Delete Role
                    returnTop();
                    break;
                };
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




module.exports = {
  startApp
};
