// Import inquirer
const inquirer = require("inquirer");

// Import returnTop
const { returnTop } = require("./returnTop");

// Import employee update prompts
const { updateEmpPrompts } = require("./prompts");

const getAnswers = () => {
  inquirer.prompt(updateEmpPrompts).then((answers) => {
    // TODO: Select employee from db to update
    const employee = answers.updateEmp1;
    const firstName = answers.updateEmpFName;
    const lastName = answers.updateEmpLName;
    const department = answers.updateEmpDep;
    const role = answers.updateEmpRole;
    const manager = answers.updateEmpMan;
    const salary = answers.updateEmpSal;

    console.log(
      `${employee}\n${firstName}\n${lastName}\n${department}\n${role}\n${manager}\n${salary}`
    );

    returnTop();
  });
};


module.exports = { getAnswers }
