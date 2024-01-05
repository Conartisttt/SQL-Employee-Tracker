const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const CrudDB = require('./lib/crud.js');

// launches inquirer prompts in terminal
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const answer = response.InitialQuestion;
            console.log(answer);
            if (!answer) {
                return process.exit;
            } else {
                const crud = new CrudDB;
                switch (answer) {
                    case "View All Departments":
                        crud.viewDepartments();
                        break;
                    case "View All Roles":
                        crud.viewRoles();
                        break;
                    case "View All Employees":
                        crud.viewEmployees();
                        break;
                    case "Add A Department":
                        crud.addDepartment();
                        break;
                    case "Add A Role":
                        crud.addRole();
                        break;
                    case "Add An Employee":
                        crud.addEmployee();
                        break;
                    case "Update An Employee Role":
                        crud.updateEmployee();
                        break;
                    default:
                        break;
                }
            }
        });
};

init();

//function written to ensure the user is done with their tasks. If not, redisplay menu. If so, kill process.
module.exports.moreQueries = () => {
    inquirer
        .prompt({
            type: 'confirm',
            message: "Are you done?",
            name: 'is_finished'
        })
        .then((response) => {
            const answer = response.is_finished;
            if (answer) {
                return process.exit()
            } else {
                init();
            }
        })
}