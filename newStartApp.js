// Load dependencies for inquirer and db connection
const { prompt } = require("inquirer");
const db = require("./db");
// Load table format for console log
require("console.table");

// 1) Start the app
const startApp = () => {
  console.log(`Welcome to the Employee Tracker!`);
  routeApp();
};

// 2) Choose how to route the inquirer
const routeApp = () => {
  prompt([
    {
      type: "list",
      name: "topMenu",
      message: `I would like to:`,
      choices: ["View", "Add", "Update", "Delete"],
    },
  ]).then((answer) => {
    let route = answer.topMenu;
    switch (route) {
      case "View":
        prompt([
          {
            type: "list",
            name: "viewP",
            message: `What would you like to view?`,
            choices: ["Departments", "Employees", "Roles", "<= Go Back"],
          },
        ]);
        break;
      case "Add":
        prompt([
          {
            type: "list",
            name: "addP",
            message: `What would you like to add?`,
            choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
          },
        ]);
        break;
      case "Update":
        prompt([
          {
            type: "list",
            name: "updateP",
            message: `What would you like to update?`,
            choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
          },
        ]);
        break;
      case "Delete":
        prompt([
          {
            type: "list",
            name: "deleteP",
            message: `What would you like to delete?`,
            choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
          },
        ]);
        break;
    }
  });
};

// Export functions for server load
module.exports = { startApp, routeApp };
