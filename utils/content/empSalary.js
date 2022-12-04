const askSal = () => {
  inquirer.prompt(updateEmpSal).then((answer) => {
    empAnswers["updateEmpSal"] = answer.updateEmpSal;
  });
};
