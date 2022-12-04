// Import inquirer
const inquirer = require("inquirer");

// Import returnTop
const { returnTop } = require("./returnTop");

// Import for file writing
const fs = require('fs');
const path = require('path');

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
    inquirer.prompt(updateEmpPrompts).then((answer) => {
      console.log(
        "Employee to Update: " +
          answer.updateEmp1 +
          "\n" +
          "To Update: " +
          answer.updateEmp2
      );
      // Create array of prompts to ask from updateEmp2
        const choices = answer.updateEmp2;
        var choicesArr = choices.toString().split(',');
        console.log(choicesArr);

      // Object to store answers: Null answers will be ignored by SQL request
      var empAnswers = {
        updateEmpFName: "",
        updateEmpLName: "",
        updateEmpDep: "",
        updateEmpRole: "",
        updateEmpMan: "",
        updateEmpSal: "",
      };

      // TODO: Determine which inquirer prompts are needed

        for (const choice in choicesArr) {

        }




      // TODO: Write inquirer prompts to setAnswers.js

      // TODO: Once setAnswers.js is ready, run setAnswers()

      const askFirst = () => {
        inquirer.prompt(updateEmpFName).then((answer) => {
          empAnswers["updateEmpFName"] = answer.updateEmpFName;
        });
      };

      const askLast = () => {
        inquirer.prompt(updateEmpLName).then((answer) => {
          empAnswers["updateEmpLName"] = answer.updateEmpLName;
        });
      };

      const askRole = () => {
        inquirer.prompt(updateEmpRole).then((answer) => {
          empAnswers["updateEmpRole"] = answer.updateEmpRole;
        });
      };

      const askDep = () => {
        inquirer.prompt(updateEmpDep).then((answer) => {
          empAnswers["updateEmpDep"] = answer.updateEmpDep;
        });
      };

      const askMan = () => {
        inquirer.prompt(updateEmpMan).then((answer) => {
          empAnswers["updateEmpMan"] = answer.updateEmpMan;
        });
      };

      const askSal = () => {
        inquirer.prompt(updateEmpSal).then((answer) => {
          empAnswers["updateEmpSal"] = answer.updateEmpSal;
        });
      };

      // Log the updated object with answers

      for (const key in empAnswers) {
        console.log(`${key}: ${empAnswers[key]}`);
        };

      // TODO: SQL REQUEST: Update Employee
      console.log("Updated Employee");
      returnTop();
    });

};

module.exports = getAnswers;
