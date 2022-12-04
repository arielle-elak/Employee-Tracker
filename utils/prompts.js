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
    name: "viewP",
    message: `View:`,
    choices: [
      "Departments",
      "Employees",
      "Roles",
      "<= Go Back"
    ],
  },
];

// 2a) EMPLOYEE VIEW Menu Prompts
const viewEmployees = [
  {
    type: "list",
    name: "viewEmp",
    message: `How would your like to view employees?`,
    choices: [
      "By Department",
      "By Manager",
      "By Role",
      "By Salary",
      "<= Go Back"
    ],
  },
];

// 3) ADD Menu Prompts
const addPrompts = [
  {
    type: "list",
    name: "addP",
    message: `Add:`,
    choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
  },
];

// 3a) ADD DEPARTMENT Menu Prompts
const addDepPrompts = [
  {
    type: "input",
    name: "addDep1",
    message: `Please Type the Department to Add:`,
    validate: async (input) => {
      if (!input) {
        return "Department cannot be blank.";
      }
      return true;
    },
  }
];

// 3b) ADD EMPLOYEE Menu Prompts
const addEmpPrompts = [
  {
    type: "input",
    name: "addEmp1",
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
    name: "addEmp2",
    message: `Employee's Last Name:`,
    validate: async (input) => {
      if (!input) {
        return "Name cannot be blank.";
      }
      return true;
    },
  },
  {
    type: "autocomplete",
    name: "addEmp3",
    message: `Please select or start typing the role you wish to assign. If the role does not yet exist, please add it first.`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
  {
    type: "list",
    name: "addEmp4",
    message: `Manager:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
  {
    type: "autocomplete",
    name: "addEmp5",
    message: `Please select or start typing the department you wish to assign. If the department does not yet exist, please add it first.`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
];

// 3c) ADD ROLE Menu Prompts
const addRolePrompts = [
  {
    type: "input",
    name: "addRole1",
    message: `Please Type the Role to Add:`,
    validate: async (input) => {
      if (!input) {
        return "Role cannot be blank.";
      }
      return true;
    },
  }
];

// 4) UPDATE Menu Prompts
const updatePrompts = [
  {
    type: "list",
    name: "updateP",
    message: `Update:`,
    choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
  },
];

// 4a) UPDATE DEPARTMENT Prompts
const updateDepPrompts = [
  {
    type: "list",
    name: "updateDep1",
    message: `Please select the Department you wish to update:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
  {
    type: "input",
    name: "updateDep2",
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
    name: "updateEmp1",
    message: `Please select or start typing the employee you wish to update:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  }
];

// 4b1) UPDATE EMPLOYEE First Name
const updateEmpFName = [
  {
    type: "input",
    name: "updateEmpFName",
    message: `What is the new First Name?`,
  }
];

// 4b2) UPDATE EMPLOYEE Last Name
const updateEmpLName = [
  {
    type: "input",
    name: "updateEmpLName",
    message: `What is the new Last Name?`,
  }
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
    name: "updateEmpMan",
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
      if (Math.sign(num) === -1) {
        return "Salary cannot be negative.";
      }
      return true;
    },
  },
];

// 4c) UPDATE Role Prompts
const updateRolePrompts = [
  {
    type: "list",
    name: "updateRole1",
    message: `Please select the Role you wish to update:`,
    // TODO Sync Choices with sql database table
    choices: ["SQL CHOICES"],
  },
  {
    type: "input",
    name: "updateRole2",
    message: `What is the new name of this Role?`,
    validate: async (input) => {
      if (!input) {
        return "New role cannot be blank.";
      }
      return true;
    },
  },
];

// 5) DELETE PROMPTS
const deletePrompts = [
  {
    type: "list",
    name: "deleteP",
    message: `Delete:`,
    choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
  },
];

// 5a) DELETE Department Prompts
const deleteDepPrompts = [
  {
    type: "list",
    name: "deleteDep1",
    message: `Select or start typing the name of the department to delete.`,
    choices: ["SQL CHOICES"],
  },
  {
    type: "list",
    name: "deleteDep2",
    message: `Are you sure you would like to delete this department? This may leave employees without a department.`,
    choices: ["No", "Yes"],
  },
];

// 5b) DELETE Employee Prompts
const deleteEmpPrompts = [
  {
    type: "list",
    name: "deleteEmp1",
    message: `Select or start typing the name of the employee to delete.`,
    choices: ["SQL CHOICES"],
  },
  {
    type: "list",
    name: "deleteEmp2",
    message: `Are you sure you would like to delete this employee?`,
    choices: ["No", "Yes"],
  },
];

// 5c) DELETE Role Prompts
const deleteRolePrompts = [
  {
    type: "list",
    name: "deleteRole1",
    message: `Select or start typing the name of the role to delete.`,
    choices: ["SQL CHOICES"],
  },
  {
    type: "list",
    name: "deleteRole2",
    message: `Are you sure you would like to delete this role? This may leave employees without a role.`,
    choices: ["No", "Yes"],
  },
];

module.exports = {
  topMenuPrompts,

  viewPrompts,
  viewEmployees,

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
  updateRolePrompts,

  deletePrompts,
  deleteDepPrompts,
  deleteEmpPrompts,
  deleteRolePrompts
};
