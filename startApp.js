// Load dependencies for inquirer and db connection
const { prompt } = require("inquirer");
// Each new instance of the db object will connect and perform the requested function
const db = require("./db");
// Load table format for console log
require("console.table");

// 1) Start the app
const startApp = () => {
  console.log(`Welcome to the Employee Tracker!`);
  routeApp();
};

// 2) Choose how to route the inquirer
const routeApp = () => {
  prompt([
    {
      type: "list",
      name: "topMenu",
      message: `I would like to:`,
      choices: ["View", "Add", "Update", "Delete"],
    },
  ]).then((answer) => {
    let route = answer.topMenu;
    switch (route) {
      case "View":
        prompt([
          {
            type: "list",
            name: "viewP",
            message: `What would you like to view?`,
            choices: ["Departments", "Employees", "Roles", "<= Go Back"],
          },
        ]).then((view) => {
          let answer = view.viewP;
          switch (answer) {
            case "Departments":
              viewAllDepartments();
              break;
            case "Employees":
              viewAllEmployees();
              break;
            case "Roles":
              viewAllRoles();
              break;
            case "<= Go Back":
              routeApp();
              break;
          }
        });
        break;
      case "Add":
        prompt([
          {
            type: "list",
            name: "addP",
            message: `What would you like to add?`,
            choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
          },
        ]);
        break;
      case "Update":
        prompt([
          {
            type: "list",
            name: "updateP",
            message: `What would you like to update?`,
            choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
          },
        ]);
        break;
      case "Delete":
        prompt([
          {
            type: "list",
            name: "deleteP",
            message: `What would you like to delete?`,
            choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
          },
        ]);
        break;
    }
  });
};

// Functions for displaying and enacting database changes

// --------------------------
// ~~~~~~~~~~ VIEW ~~~~~~~~~~
// --------------------------

function viewAllDepartments() {
  db.fetchAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => routeApp());
}

function viewAllRoles() {
  db.fetchAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => routeApp());
}

function viewAllEmployees() {
  db.fetchAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => routeApp());
}

// --------------------------
// ~~~~~~~~~~ ADD ~~~~~~~~~~
// --------------------------

function addDepartment() {}

function addEmployee() {}

function addRole() {}

// --------------------------
// ~~~~~~~~~~ UPDATE ~~~~~~~~~~
// --------------------------

function updateDepartment() {}

function updateEmployee() {}

function updateRole() {}

// --------------------------
// ~~~~~~~~~~ DELETE ~~~~~~~~~~
// --------------------------

function deleteDepartment() {}

function deleteEmployee() {}

function deleteRole() {}

startApp();
