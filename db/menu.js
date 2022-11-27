const inquirer = require("inquirer");

// 1) TOP Menu Prompts
const topMenuPrompts = [
  {
    type: "list",
    name: "topMenu",
    message: `I would like to:`,
    choices: ["View", "Add", "Update", "Delete"],
  },
];

// 2) VIEW Menu Prompts
const viewPrompts = [
  {
    type: "list",
    name: "viewPrompts",
    message: `View:`,
    choices: [
      "All Departments",
      "All Employees",
      "All Roles",
      "Search",
      "<= Go Back",
    ],
  },
];

// 2a) VIEW SEARCH Menu Prompts
const viewSearchPrompts = [
  {
    type: "list",
    name: "viewSearchPrompts",
    message: `Search for:`,
    choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
  },
];

// 3) ADD Menu Prompts
const addPrompts = [
  {
    type: "list",
    name: "addPrompts",
    message: `Add:`,
    choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
  },
];

// 3a) ADD DEPARTMENT Menu Prompts
const addDepPrompts = [
  {
    type: "input",
    name: "addDepPrompts",
    message: `Please Type the Department to Add:`,
    validate: async (input) => {
      if (!input) {
        return "Department cannot be blank.";
      }
      return true;
    },
  },
];

// 3b) ADD EMPLOYEE Menu Prompts
const addEmpPrompts = [
  {
    type: "input",
    name: "addEmpPrompts1",
    message: `Employee's First Name:`,
    validate: async (input) => {
      if (!input) {
        return "Name cannot be blank.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "addEmpPrompts2",
    message: `${answers.addEmpPrompts1}'s Last Name:`,
    validate: async (input) => {
      if (!input) {
        return "Name cannot be blank.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "addEmpPrompts3",
    message: `What is ${answers.addEmpPrompts1} ${answers.addEmpPrompts2}'s Job Title?`,
    validate: async (input) => {
      if (!input) {
        return "Job Title cannot be blank.";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "addEmpPrompts4",
    message: `Who is ${answers.addEmpPrompts1} ${answers.addEmpPrompts2}'s Manager?`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
  {
    type: "list",
    name: "addEmpPrompts5",
    message: `What is ${answers.addEmpPrompts1} ${answers.addEmpPrompts2}'s Department?`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  }
];

// 3c) ADD ROLE Menu Prompts
const addRolePrompts = [
  {
    type: "input",
    name: "addRolePrompts",
    message: `Please Type the Role to Add:`,
    validate: async (input) => {
      if (!input) {
        return "Role cannot be blank.";
      }
      return true;
    },
  },
];


module.exports = {
  topMenuPrompts,
  viewPrompts,
  viewSearchPrompts,
  addPrompts,
  addDepPrompts,
  addEmpPrompts,
  addRolePrompts,
};
