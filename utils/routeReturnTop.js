const inquirer = require("inquirer");

//const routeApp = require("./routeReturnTop");
const routeApp = require("./startApp");

// Return to top menu or end the app
const returnTop = () => {
  inquirer
    .prompt({
      type: "list",
      name: "returntoTop",
      message: "Would you like to perform another action?",
      choices: ["Yes", "No"],
    })
    .then((answer) => {
      switch (answer.returntoTop) {
        case "Yes":
          routeApp();
          break;
        case "No":
          console.log(
            "Thanks for using!\nYou will find a log of changes made in the 'session_log' file.\nYou may now type CTRL + C to end this session.\nTo start again, type 'node server'."
          );
          break;
      }
    });
};

module.exports = {
  returnTop,
};
