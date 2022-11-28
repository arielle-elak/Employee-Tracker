// Import inquirer
const inquirer = require("inquirer");
// Import routes and utils and routes for VIEW
const viewPrompts = require("./prompts");
const viewDepartments = require("../routes/departmentRoutes");
const viewEmployees = require("../routes/employeeRoutes");
const viewRoles = require("../routes/roleRoutes");

const View = () => {
  inquirer.prompt(viewPrompts).then((answer) => {
    viewRoute(answer.viewP);
  });
};

// Choose how to route the inquirer
const viewRoute = (route) => {
  switch (route) {
    case "All Departments":
      viewDepartments();
      break;
    case "All Employees":
      viewEmployees();
      break;
    case "All Roles":
      viewRoles();
      break;
    case "Search":
      viewSearch();
      break;
    case "<= Go Back":
      startApp();
      break;
  }
};

module.exports = { view };
