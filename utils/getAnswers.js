// Import inquirer
const inquirer = require("inquirer");

// Import returnTop
const { returnTop } = require("./returnTop");


// Import the final setAnswers.js file to be written
const { setAnswers } = require("./setAnswers");

// Import employee update prompts
const {
  updateEmpPrompts,
  updateEmpFName,
  updateEmpLName,
  updateEmpDep,
  updateEmpRole,
  updateEmpMan,
  updateEmpSal,
} = require("./prompts");

const getAnswers = () => {
  inquirer.prompt(updateEmpPrompts).then((answers) => {
    // TODO: Select employee from db to update
    



    returnTop();
  });
};


module.exports = { getAnswers }
