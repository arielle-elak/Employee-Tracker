// Initialize connection to server using variables from .env file

require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_NAME,
    user: process.env.DB_USER,
    database: process.env.DB_PASSWORD
});

module.exports = connection;
