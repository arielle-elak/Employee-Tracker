// MENU OPTIONS FOR LOGIC FLOW

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
    name: "addDepPrompts1",
    message: `Please Type the Department to Add:`,
    validate: async (input) => {
      if (!input) {
        return "Department cannot be blank.";
      }
      return true;
    },
  },
  {
    type: "checkbox",
    name: "addDepPrompts2",
    message: `Please select all roles contained within this department:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
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
    message: `Employee's Last Name:`,
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
    message: `Role:`,
    validate: async (input) => {
      if (!input) {
        return "Role cannot be blank.";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "addEmpPrompts4",
    message: `Manager:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
  {
    type: "list",
    name: "addEmpPrompts5",
    message: `Department:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
];

// 3c) ADD ROLE Menu Prompts
const addRolePrompts = [
  {
    type: "input",
    name: "addRolePrompts1",
    message: `Please Type the Role to Add:`,
    validate: async (input) => {
      if (!input) {
        return "Role cannot be blank.";
      }
      return true;
    },
  },
  {
    type: "checkbox",
    name: "addRolePrompts2",
    message: `Please select all departments that utilize this role:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
];

// 4) UPDATE Menu Prompts
const updatePrompts = [
  {
    type: "list",
    name: "updatePrompts",
    message: `Update:`,
    choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
  },
];

// 4a) UPDATE DEPARTMENT Prompts
const updateDepPrompts = [
  {
    type: "list",
    name: "updateDepPrompts1",
    message: `Please select the Department you wish to update:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
  {
    type: "input",
    name: "updateDepPrompts2",
    message: `What is the new name of this Department?`,
    validate: async (input) => {
      if (!input) {
        return "New department cannot be blank.";
      }
      return true;
    },
  },
];

// 4b) UPDATE EMPLOYEE Prompts
const updateEmpPrompts = [
  {
    type: "autocomplete",
    name: "updateEmpPrompts1",
    message: `Please select or start typing the employee you wish to update:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
  {
    type: "checkbox",
    name: "addEmpPrompts2",
    message: `What attribute(s) would you like to update?`,
    choices: [
      "First Name",
      "Last Name",
      "Role",
      "Department",
      "Manager",
      "Salary",
    ],
  },
];

// 4b1) UPDATE EMPLOYEE First Name
const updateEmpFName = [
  {
    type: "input",
    name: "updateEmpFName",
    message: `What is the new First Name?`,
    validate: async (input) => {
      if (!input) {
        return "First Name cannot be blank.";
      }
      return true;
    },
  },
];

// 4b2) UPDATE EMPLOYEE Last Name
const updateEmpLName = [
  {
    type: "input",
    name: "updateEmpLName",
    message: `What is the new Last Name?`,
    validate: async (input) => {
      if (!input) {
        return "Last Name cannot be blank.";
      }
      return true;
    },
  },
];

// 4b3) UPDATE EMPLOYEE Department
const updateEmpDep = [
  {
    type: "autocomplete",
    name: "updateEmpDep",
    message: `Please select or start typing the new Department.`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
];

// 4b4) UPDATE EMPLOYEE Role
const updateEmpRole = [
  {
    type: "autocomplete",
    name: "updateEmpRole",
    message: `Please select or start typing the new Role.`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
];

// 4b5) UPDATE EMPLOYEE Manager
const updateEmpMan = [
  {
    type: "autocomplete",
    name: "updateEmpRole",
    message: `Please select or start typing the new Manager.`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
];

// 4b6) UPDATE EMPLOYEE Salary
const updateEmpSal = [
  {
    type: "input",
    name: "updateEmpSal",
    message: `What is the new Salary?`,
    validate: async (input) => {
      if (!input || Math.sign(num) === -1) {
        return "Salary cannot be blank or negative.";
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
  updatePrompts,
  updateDepPrompts,
  updateEmpPrompts,
  updateEmpFName,
  updateEmpLName,
  updateEmpDep,
  updateEmpRole,
  updateEmpMan,
  updateEmpSal,
};
