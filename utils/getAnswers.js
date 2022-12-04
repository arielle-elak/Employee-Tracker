// Import inquirer
const inquirer = require("inquirer");

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
    const prompts = [];

    if (choices.includes("First Name")) {
      prompts.push("updateEmpFName");
    }
    if (choices.includes("Last Name")) {
      prompts.push("updateEmpLName");
    }
    if (choices.includes("Role")) {
      prompts.push("updateEmpRole");
    }
    if (choices.includes("Department")) {
      prompts.push("updateEmpDep");
    }
    if (choices.includes("Manager")) {
      prompts.push("updateEmpMan");
    }
    if (choices.includes("Salary")) {
      prompts.push("updateEmpSal");
    }

    console.log("Functions to Run: " + prompts);

    // TODO: Cycle Through prompts array to fill empAnswers
    for (const prompt of prompts) {
      inquirer.prompt(prompt).then((answer) => {
        console.log(answer.prompt);
      });
    }
    // Object to store answers: Null answers will be ignored by SQL request
    const empAnswers = {
      updateEmpFName: null,
      updateEmpLName: null,
      updateEmpDep: null,
      updateEmpRole: null,
      updateEmpMan: null,
      updateEmpSal: null,
    };

    // TODO: SQL REQUEST: Update Employee
    console.log("Updated Employee");
    returnTop();
  });
};

module.exports = getAnswers;
