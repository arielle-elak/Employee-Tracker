const askMan = () => {
    inquirer.prompt(updateEmpMan).then((answer) => {
      empAnswers["updateEmpMan"] = answer.updateEmpMan;
    });
  };
