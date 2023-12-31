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
            switch (answer) {
                case "View All Departments":
                    const crud1 = new CrudDB;
                    crud1.viewDepartments();
                    return moreQueries();
                case "View All Roles":
                    const crud2 = new CrudDB;
                    crud2.viewRoles();
                    return moreQueries();
                case "View All Employees":
                    const crud3 = new CrudDB;
                    crud3.viewEmployees();
                    return moreQueries();
                case "Add A Department":
                    const crud4 = new CrudDB;
                    crud4.addDepartment();
                    return moreQueries();
                case "Add A Role":
                    const crud5 = new CrudDB;
                    crud5.addRole();
                    return moreQueries();
                case "Add An Employee":
                    const crud6 = new CrudDB;
                    crud6.addEmployee();
                    return moreQueries();
                case "Update An Employee Role":
                    const crud7 = new CrudDB;
                    crud7.updateEmployee();
                    return moreQueries();
                default:
                    break;
            }
        });
};

function moreQueries() {
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

init();
