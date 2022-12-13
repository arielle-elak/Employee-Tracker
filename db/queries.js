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
    return this.query.promise().query();
  }

  viewAllEmployees() {
    return this.query.promise().query();
  }

  viewAllRoles() {
    return this.query.promise().query();
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
