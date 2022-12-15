const connection = require("./connection");

// Connection class constructor connects to the database each time a NEW iteration is called
// Within object, there are various possible types of queries to make
class DB {
  constructor(connection) {
    this.connection = connection;
  }

  fetchAllDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id AS ID, department.name FROM department");
  }

  fetchAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id AS ID, employee.first_name AS First_Name, employee.last_name AS Last_Name, role.title AS Role, department.name AS Department, role.salary AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }

  fetchAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id AS Id, role.title AS Role, department.name AS Department, role.salary AS Salary FROM role LEFT JOIN department on department.id = role.department_id;"
      );
  }

  // Add Department based on passed department
  createDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  // Add Employee as per values in employee object
  createEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  // Add Role based on passed role
  createRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  // Update passed Department based on departmentUpdate variable, find departmentId to associate update
  modifyDepartment(departmentUpdate, departmentId) {
    return this.connection
      .promise()
      .query("UPDATE department SET department_name = ? WHERE id = ?", [
        departmentUpdate,
        departmentId,
      ]);
  }

  // Only update the employee parameters requested in inquirer
  modifyEmployee(
    employeeId,
    employeeNameF,
    employeeNameL,
    employeeRole,
    employeeManager
  ) {
    if (employeeNameF) {
      return this.connection
        .promise()
        .query("UPDATE employee SET first_name = ? WHERE id = ?", [
          employeeNameF,
          employeeId,
        ]);
    }
    if (employeeNameL) {
      return this.connection
        .promise()
        .query("UPDATE employee SET last_name = ? WHERE id = ?", [
          employeeNameL,
          employeeId,
        ]);
    }
    if (employeeRole) {
      return this.connection
        .promise()
        .query("UPDATE employee SET role_id = ? WHERE id = ?", [
          employeeRole,
          employeeId,
        ]);
    }
    if (employeeManager) {
      return this.connection
        .promise()
        .query("UPDATE employee SET manager_id = ? WHERE id = ?", [
          employeeManager,
          employeeId,
        ]);
    }
  }

  // Update Role based on the passed role value
  modifyRole(roleUpdate, roleId) {
    return this.connection
      .promise()
      .query("UPDATE role SET role_title = ? WHERE id = ?", [
        roleUpdate,
        roleId,
      ]);
  }

  // Delete selected department
  removeDepartment(departmentId) {
    return this.connection
      .promise()
      .query("DELETE FROM department WHERE id = ?", departmentId);
  }

  // Delete selected employee
  removeEmployee(employeeId) {
    return this.connection
      .promise()
      .query("DELETE FROM employee WHERE id = ?", employeeId);
  }

  // Delete selected role
  removeRole(roleId) {
    return this.connection
      .promise()
      .query("DELETE FROM role WHERE id =?", roleId);
  }
}

module.exports = new DB(connection);
