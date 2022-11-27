// Import utilities for asking prompts.
const {
  topMenuPrompts,
  viewPrompts,
  viewSearchPrompts,
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
} = require("./utils/prompts");

// Import inquirer
const inquirer = require("inquirer");

const startApp = () => {
  console.log(`Welcome to the Employee Tracker!`);
  inquirer.prompt(topMenuPrompts).then((answers) => {
    console.log(answers);
  });
};

module.exports = startApp;
