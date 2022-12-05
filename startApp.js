const { routeApp } = require("./utils/routeApp");

// 1) Start the app
const startApp = () => {
  console.log(`Welcome to the Employee Tracker!`);
  routeApp();
};

module.exports = {
  startApp,
};
