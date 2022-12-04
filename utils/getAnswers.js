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
    // Create array of prompts to ask from updateEmp2
    const choices = answers.updateEmp2;
    const choicesArr = choices.toString().split(",");
    choicesArr.forEach((element) => console.log(element));
    var empAnswers = {
      updateEmpFName: "",
      updateEmpLName: "",
      updateEmpDep: "",
      updateEmpRole: "",
      updateEmpMan: "",
      updateEmpSal: "",
    };

    for (const key in empAnswers) {
      console.log(`${key}: ${empAnswers[key]}`);
    }
  });
};


module.exports = { getAnswers }
