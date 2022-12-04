const askRole = () => {
  inquirer.prompt(updateEmpRole).then((answer) => {
    empAnswers["updateEmpRole"] = answer.updateEmpRole;
  });
};
