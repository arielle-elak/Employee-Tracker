const askLast = () => {
    inquirer.prompt(updateEmpLName).then((answer) => {
      empAnswers["updateEmpLName"] = answer.updateEmpLName;
    });
  };
