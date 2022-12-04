const askFirst = () => {
    inquirer.prompt(updateEmpFName).then((answer) => {
      empAnswers["updateEmpFName"] = answer.updateEmpFName;
    });
  };
