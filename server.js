const express = require('express');
// Import and require mysql2


const PORT = process.env.PORT || 3001;
const app = express();

// Import connection settings from config/connection
const connection = require('./config/connection');
