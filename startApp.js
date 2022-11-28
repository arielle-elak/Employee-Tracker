// Import utilities for asking prompts.
const { topMenuPrompts } = require("./utils/prompts");

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
      console.log("View " + route);
      break;
    case "Add":
      console.log("Add " + route);
      break;
  };
};

module.exports = startApp;
