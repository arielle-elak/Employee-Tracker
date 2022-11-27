// Import express
const express = require('express');

// Connection config import
const connection = require('./config/connection');

// Import and require mysql2
const mysql = require('mysql2');

// Use app to say when express needs to be used
const app = express();
// Designate port for express (either from .env or 3001 by default)
const PORT = process.env.PORT || 3001;

// Express middleware to interpret json input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
const db = mysql.createConnection (
  {
    host: process.env.DB_HOST || 'localhost',
    // MySQL username,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS,
    database: process.env.DB_NAME || 'employees_db'
  },
  console.log(`Welcome to the Employee Tracker!`)
);
