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

const routeApp = (route) => {
  console.log("App routed with " + route);
};

module.exports = startApp;
