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
      // Create array of prompts to ask from updateEmp2
      const choices = answer.updateEmp2;
      const choicesArr = choices.toString().split(",");
      // console.log(choicesArr);

      // Determine which inquirer prompts are needed and write to
      for (const choice in choicesArr) {
        switch (choice) {
          case "First Name":
            console.log("First Name");
            return ` const askFirst = () => {
                    inquirer.prompt(updateEmpFName).then((answer) => {
                      empAnswers["updateEmpFName"] = answer.updateEmpFName;
                    });
                  };`;
          case "Last Name":
            console.log("Last Name");
            return ` const askLast = () => {
                inquirer.prompt(updateEmpLName).then((answer) => {
                  empAnswers["updateEmpLName"] = answer.updateEmpLName;
                });
              };`;
          case "Role":
            console.log("Role");
            return ` const askRole = () => {
                inquirer.prompt(updateEmpRole).then((answer) => {
                  empAnswers["updateEmpRole"] = answer.updateEmpRole;
                });
              };`;
          case "Department":
            console.log("Department");
            return ` const askDep = () => {
                    inquirer.prompt(updateEmpDep).then((answer) => {
                      empAnswers["updateEmpDep"] = answer.updateEmpDep;
                    });
                  };`;
          case "Manager":
            console.log("Manager");
            return `const askMan = () => {
                inquirer.prompt(updateEmpMan).then((answer) => {
                  empAnswers["updateEmpMan"] = answer.updateEmpMan;
                });
              };`;
          case "Salary":
            console.log("Salary");
            return `
                const askSal = () => {
                  inquirer.prompt(updateEmpSal).then((answer) => {
                    empAnswers["updateEmpSal"] = answer.updateEmpSal;
                  });
                };`;
        }
      }

      // Log the updated object with answers

      // Object to store answers: Null answers will be ignored by SQL request
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

      // TODO: Once setAnswers.js is ready, run setAnswers()

      // TODO: SQL REQUEST: Update Employee
      console.log("Updated Employee");
      returnTop();
    });

};

module.exports = getAnswers;
