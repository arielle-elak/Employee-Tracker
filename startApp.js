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
        ])
        .then((add) => {
          let answer = add.addP;
          switch (answer) {
            case "A Department":
              addDepartment();
              break;
            case "An Employee":
              addEmployee();
              break;
            case "A Role":
              addRole();
              break;
            case "<= Go Back":
              routeApp();
              break;
          }
        });
        break;
      case "Update":
        prompt([
          {
            type: "list",
            name: "updateP",
            message: `What would you like to update?`,
            choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
          },
        ]).then((update) => {
          let answer = update.updateP;
          switch (answer) {
            case "A Department":
              updateDepartment();
              break;
            case "An Employee":
              updateEmployee();
              break;
            case "A Role":
              updateRole();
              break;
            case "<= Go Back":
              routeApp();
              break;
          }
        });
        break;
      case "Delete":
        prompt([
          {
            type: "list",
            name: "deleteP",
            message: `What would you like to delete?`,
            choices: ["A Department", "An Employee", "A Role", "<= Go Back"],
          },
        ]).then((remove) => {
          let answer = remove.deleteP;
          switch (answer) {
            case "A Department":
              deleteDepartment();
              break;
            case "An Employee":
              deleteEmployee();
              break;
            case "A Role":
              deleteRole();
              break;
            case "<= Go Back":
              routeApp();
              break;
          }
        });
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
      console.table(rows);
    })
    .then(() => routeApp());
}

function viewAllRoles() {
  db.fetchAllRoles()
    .then(([rows]) => {
      console.table(rows);
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

function addDepartment() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department?",
    },
  ]).then((res) => {
    let name = res;
    db.createDepartment(name)
      .then(() => console.log(`The ${name.name} department has been added.`))
      .then(() => routeApp());
  });
}

function addEmployee() {}

function addRole() {
  db.fetchAllDepartments().then(([rows]) => {
    let departments = rows;
    const departmentChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    prompt([
      {
        name: "title",
        message: "What is the name of the role?",
      },
      {
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "department_id",
        message: "Which department does the role belong to?",
        choices: departmentChoices,
      },
    ]).then((role) => {
      db.createRole(role)
        .then(console.log(role))
        .then(() => console.log(`Added ${role.title} to the database`))
        .then(() => routeApp());
    });
  });
}

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
