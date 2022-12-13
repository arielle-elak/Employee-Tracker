const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: process.env.DB_USER,
  // Your password
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
