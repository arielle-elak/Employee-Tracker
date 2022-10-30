// Initialize connection to server using variables from .env file

require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection(
  {
    host: process.env.DB_NAME,
    user: process.env.DB_USER,
    database: process.env.DB_PASSWORD
  },
  console.log('Connected to the employees_db database.')
);

module.exports = connection;
