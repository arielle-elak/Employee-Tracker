// Import inquirer
const inquirer = require("inquirer");

// Import returnTop
const { returnTop } = require("./returnTop");

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

      // Object to store answers: Null answers will be ignored by SQL request
      var empAnswers = {
        updateEmpFName: null,
        updateEmpLName: null,
        updateEmpDep: null,
        updateEmpRole: null,
        updateEmpMan: null,
        updateEmpSal: null,
      };

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

      console.log("Updated Answers: " + empAnswers);

    // TODO: SQL REQUEST: Update Employee
      console.log("Updated Employee");
      returnTop();
  });
};

module.exports = getAnswers;
