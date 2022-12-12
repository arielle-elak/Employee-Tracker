const express = require('express');
const sequelize = require('./config/connection');
const { startApp } = require('./startApp');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on connection to db and server - run startApp()
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => startApp());
});
