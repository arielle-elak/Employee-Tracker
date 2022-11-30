// Import utilities for asking prompts.
const {
  topMenuPrompts,
  viewPrompts,
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
          case "All Departments":
            break;
          case "All Employees":
            break;
          case "All Roles":
            break;
          case "Search Departments":
            break;
          case "Search Employees":
            break;
          case "Search Roles":
            break;
          case "<= Go Back":
            break;
        }
      });
      break;
    case "Add":
      break;
    case "Update":
      break;
    case "Delete":
      break;
  }
};

module.exports = startApp;
