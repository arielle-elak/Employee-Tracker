// Import express
const express = require('express');

// Connection config import
const connection = require('./config/connection');

// Use app to say when express needs to be used
const app = express();
// Designate port for express (either from .env or 3001 by default)
const PORT = process.env.PORT || 3001;

// Import startApp js for beginning the inquirer prompts.
const { startApp } = require("./utils/startApp");

// Express middleware to interpret json input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
// Start Inquirer program
connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => startApp());
});
