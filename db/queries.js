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
    return this.query
      .promise()
      .query(
        "SELECT department.id AS ID, department.name AS Department FROM department"
      );
  }

  viewAllEmployees() {
    return this.query
      .promise()
      .query(
        "SELECT employee.id AS ID, employee.first_name AS First Name, employee.last_name AS Last Name, role.title AS Role, department.name AS Department, role.salary AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id"
      );
  }

  viewAllRoles() {
    return this.query
      .promise()
      .query(
        "SELECT role.id AS Id, role.title AS Role, department.name AS Department, role.salary AS Salary FROM role LEFT JOIN department on department.id = role.department_id;"
      );
  }

  // --------------------------
  // ~~~~~~~~~~ ADD ~~~~~~~~~~
  // --------------------------

  // Add Department based on passed department
  addDepartment(department) {
    return this.query
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  // Add Employee as per values in employee object
  addEmployee(employee) {
    return this.query.promise().query("INSERT INTO employee SET ?", employee);
  }

  // Add Role based on passed role
  addRole(role) {
    return this.query.promise().query("INSERT INTO role SET ?", role);
  }

  // ----------------------------
  // ~~~~~~~~~~ UPDATE ~~~~~~~~~~
  // ----------------------------

  // Update passed Department based on departmentUpdate variable, find departmentId to associate update
  updateDepartment(departmentUpdate, departmentId) {
    return this.query
      .promise()
      .query("UPDATE department SET department_name = ? WHERE id = ?", [
        departmentUpdate,
        departmentId,
      ]);
  }

  // Only update the employee parameters requested in inquirer
  updateEmployee(
    employeeId,
    employeeNameF,
    employeeNameL,
    employeeRole,
    employeeManager
  ) {
    if (employeeNameF) {
      return this.query
        .promise()
        .query("UPDATE employee SET first_name = ? WHERE id = ?", [
          employeeNameF,
          employeeId,
        ]);
    }
    if (employeeNameL) {
      return this.query
        .promise()
        .query("UPDATE employee SET last_name = ? WHERE id = ?", [
          employeeNameL,
          employeeId,
        ]);
    }
    if (employeeRole) {
      return this.query
        .promise()
        .query("UPDATE employee SET role_id = ? WHERE id = ?", [
          employeeRole,
          employeeId,
        ]);
    }
    if (employeeManager) {
      return this.query
        .promise()
        .query("UPDATE employee SET manager_id = ? WHERE id = ?", [
          employeeManager,
          employeeId,
        ]);
    }
  }

  // Update Role based on the passed role value
  updateRole(roleUpdate, roleId) {
    return this.query
      .promise()
      .query("UPDATE role SET role_title = ? WHERE id = ?", [
        roleUpdate,
        roleId,
      ]);
  }

  // ----------------------------
  // ~~~~~~~~~~ DELETE ~~~~~~~~~~
  // ----------------------------

  // Delete selected department
  deleteDepartment(departmentId) {
    return this.query
      .promise()
      .query("DELETE FROM department WHERE id = ?", departmentId);
  }

  // Delete selected employee
  deleteEmployee(employeeId) {
    return this.query
      .promise()
      .query("DELETE FROM employee WHERE id = ?", employeeId);
  }

  // Delete selected role
  deleteRole(roleId) {
    return this.query.promise().query("DELETE FROM role WHERE id =?", roleId);
  }
}

module.exports = new Connection(query);
