const inquirer = require('inquirer');
const questions = require('./lib/questions');

// launches inquirer prompts in terminal and passes responses to writeFile
inquirer
  .prompt(questions)
  .then((response) =>
    functionName(response)
  );
