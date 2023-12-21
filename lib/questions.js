const questions = [
    {
      type: 'input',
      message: 'Enter text for your logo. (Up to three characters)',
      name: 'text',
      validate: (answer) => lengthChecker(answer)
    },
    {
      type: 'input',
      message: 'Enter the text color for your logo (color keywork or hexadecimal number)',
      name: 'textColor',
      validate: (answer) => colorChecker(answer.toLowerCase())
    },
    {
      type: 'list',
      message: 'What shape would you like to create?',
      choices: ["Circle", "Triangle", "Square"],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'Enter the color for your shape (color keyword or hexadecimal number)',
      name: 'shapeColor',
      validate: (answer) => colorChecker(answer.toLowerCase())
  
    },
  ]

  module.exports = questions;