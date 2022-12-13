const query = require("../config/connection");

// Connection class constructor connects to the database each time a NEW iteration is called
// Within object, there are various possible types of queries to make
class Connection {
  constructor(query) {
    this.query = query;
  }

  // --------------------------
  // ~~~~~~~~~~ VIEW ~~~~~~~~~~
  // --------------------------

  viewAllDepartments() {
      return this.query.promise().query(
        "SELECT department.id AS ID, department.name AS Department FROM department"
    );
  }

  viewAllEmployees() {
      return this.query.promise().query(
        "SELECT employee.id AS ID, employee.first_name AS First Name, employee.last_name AS Last Name, role.title AS Role, department.name AS Department, role.salary AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id"
    );
  }

  viewAllRoles() {
    return this.query.promise().query(
        "SELECT role.id AS Id, role.title AS Role, department.name AS Department, role.salary AS Salary FROM role LEFT JOIN department on department.id = role.department_id;"
      );
  }

  // --------------------------
  // ~~~~~~~~~~ ADD ~~~~~~~~~~
  // --------------------------

  addDepartment() {
    return this.query.promise().query();
  }

  addEmployee() {
    return this.query.promise().query();
  }

  addRole() {
    return this.query.promise().query();
  }

  // ----------------------------
  // ~~~~~~~~~~ UPDATE ~~~~~~~~~~
  // ----------------------------

  updateDepartment() {
    return this.query.promise().query();
  }

  updateEmployee() {
    return this.query.promise().query();
  }

  updateRole() {
    return this.query.promise().query();
  }

  // ----------------------------
  // ~~~~~~~~~~ DELETE ~~~~~~~~~~
  // ----------------------------

  deleteDepartment() {
    return this.query.promise().query();
  }

  deleteEmployee() {
    return this.query.promise().query();
  }

  deleteRole() {
    return this.query.promise().query();
  }
}

module.exports = new Connection(query);
