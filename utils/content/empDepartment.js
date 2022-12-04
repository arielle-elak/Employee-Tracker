const askDep = () => {
    inquirer.prompt(updateEmpDep).then((answer) => {
      empAnswers["updateEmpDep"] = answer.updateEmpDep;
    });
  };
