// Import utilities for asking prompts.
const {
  topMenuPrompts,
  viewPrompts,
  viewEmployees,
  addPrompts,
  addDepPrompts,
  addEmpPrompts,
  addRolePrompts,
  updatePrompts,
  updateDepPrompts,
  updateEmpPrompts,
  updateEmpFName,
  updateEmpLName,
  updateEmpDep,
  updateEmpRole,
  updateEmpMan,
  updateEmpSal,
  deletePrompts,
} = require("./prompts");

// Import inquirer
const inquirer = require("inquirer");

// Start the app
const startApp = () => {
  console.log(`Welcome to the Employee Tracker!`);
  inquirer.prompt(topMenuPrompts).then((answer) => {
    routeApp(answer.topMenu);
  });
};

// Choose how to route the inquirer
const routeApp = (route) => {
  switch (route) {
    case "View":
      inquirer.prompt(viewPrompts).then((answer) => {
        switch (answer.viewP) {
          case "Departments":
            break;
          case "Employees":
            inquirer.prompt(viewEmployees).then((answer) => {
              switch (answer.viewEmp) {
                case "Department":
                  break;
                case "Manager":
                  break;
                case "Role":
                  break;
                case "Salary":
                  break;
                case "<= Go Back":
                  break;
              }
            });
            break;
          case "Roles":
            break;
          case "<= Go Back":
            inquirer.prompt(topMenuPrompts).then((answer) => {
              routeApp(answer.topMenu);
            });
            break;
        }
      });
      break;
    case "Add":
      inquirer.prompt(addPrompts).then((answer) => {
        switch (answer.addP) {
          case "A Department":
            inquirer.prompt(addDepPrompts).then((answer) => {});
            break;
          case "An Employee":
            inquirer.prompt(addEmpPrompts).then((answer) => {});
            break;
          case "A Role":
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
