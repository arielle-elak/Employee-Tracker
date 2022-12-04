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
            console.log("View All Departments");
            break;
          case "Employees":
             // 2a) VIEW Employees
            inquirer.prompt(viewEmployees).then((answer) => {
              switch (answer.viewEmp) {
                case "By Department":
                  console.log("View All Employees By Department");
                  break;
                case "By Manager":
                  console.log("View All Employees By Manager");
                  break;
                case "By Role":
                  console.log("View All Employees By Role");
                  break;
                case "By Salary":
                  console.log("View All Employees By Salary");
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
            console.log("View All Roles");
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
            inquirer.prompt(addDepPrompts).then((answer) => {});
            break;
          case "An Employee":
            // 3b) ADD Employee
            inquirer.prompt(addEmpPrompts).then((answer) => {});
            break;
          case "A Role":
            // 3c) ADD Role
            inquirer.prompt(addRolePrompts).then((answer) => {});
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
            break;
          case "An Employee":
            break;
          case "A Role":
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
            break;
          case "An Employee":
            break;
          case "A Role":
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
