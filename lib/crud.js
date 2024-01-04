// Import and require mysql2
const mysql = require('mysql2');

//import inquirer
const inquirer = require('inquirer');

//import function from index
const moreQueries = require('../index');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);


//Class with constructor function and all methods saved to be inherited
class CrudDB {
  constructor(searchTerm) {
    this.searchTerm = searchTerm;
  }
  viewDepartments() {
    db.query('SELECT * FROM department', (err, result) => {
      if (err) {
        console.log(err);
        return moreQueries.moreQueries();
      } else {
        console.table(result)
        return moreQueries.moreQueries();
      }

    });
  };

  viewRoles() {
    db.query('SELECT * FROM role', (err, result) => {
      if (err) {
        console.log(err);
        return moreQueries.moreQueries();
      } else {
        console.table(result);
        return moreQueries.moreQueries();
      }

    });
  };

  viewEmployees() {
    db.query('SELECT * FROM employee JOIN role ON employee.role_id = role.id', (err, result) => {
      if (err) {
        console.log(err);
        return moreQueries.moreQueries();
      } else {
        console.table(result);
        return moreQueries.moreQueries();
      }
    });
  };

  addDepartment() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "Enter name of department",
          name: 'department',
          validate: (answer) => !answer ? "You must provide a department name" : true
        }
      ])
      .then((response) => {
        const departmentToAdd = response.department;
        db.query('INSERT INTO department (name) VALUES (?)', departmentToAdd, (err, result) => {
          if (err) {
            console.log(err);
            return moreQueries.moreQueries();
          } else {
            console.log("Department added!")
            return moreQueries.moreQueries();
          }
        })
      })
  };

  addRole() {
    db.query('SELECT * FROM department', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const deptArr = result.map((item) => {
          return `${item.name} ${item.id}`
        })

        inquirer
          .prompt([
            {
              type: 'input',
              message: "Enter name of role",
              name: 'roleTitle',
              validate: (answer) => !answer ? "You must provide a role name" : true
            },
            {
              type: 'input',
              message: "Enter salary amount",
              name: 'salaryAmount',
              validate: (answer) => !answer ? "You must provide a salary amount" : true
            },
            {
              type: 'list',
              choices: deptArr,
              message: "Select department ID for role",
              name: 'departmentID',
              validate: (answer) => !answer ? "You must provide a department ID" : true
            }
          ])
          .then((response) => {
            const roleTitleToAdd = response.roleTitle;
            const salaryAmountToAdd = parseInt(response.salaryAmount);
            const departmentIDToResponse = response.departmentID;
            const departmentIDSplit = departmentIDToResponse.split(" ");
            const departmentIDToAdd = departmentIDSplit[1];

            db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [roleTitleToAdd, salaryAmountToAdd, departmentIDToAdd], (err, result) => {
              if (err) {
                console.log(err);
                return moreQueries.moreQueries();
              } else {
                console.log("Role added!")
                return moreQueries.moreQueries();
              }

            })
          })
      }
    })
  };

  addEmployee() {
    db.query('SELECT id, title FROM role', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const roleArr = result.map((item) => {
          return `${item.title}, ${item.id}`
        })

        db.query('SELECT id, first_name, last_name FROM employee', (err, result) => {
          if (err) {
            console.log(err);
          } else {
            const empIdArr = result.map((item) => {
              return `${item.id} ${item.first_name} ${item.last_name}`
            })
            inquirer
              .prompt([
                {
                  type: 'input',
                  message: "Enter first name of employee",
                  name: 'firstName',
                  validate: (answer) => !answer ? "You must provide a first name" : true
                },
                {
                  type: 'input',
                  message: "Enter last name of employee",
                  name: 'lastName',
                  validate: (answer) => !answer ? "You must provide a last name" : true
                },
                {
                  type: 'list',
                  choices: roleArr,
                  message: "Select role for employee",
                  name: 'roleID',
                  validate: (answer) => !answer ? "You must provide a role ID" : true
                },
                {
                  type: 'list',
                  choices: empIdArr,
                  message: "Select manager for employee",
                  name: 'managerID',
                  validate: (answer) => !answer ? "You must provide a manager ID" : true
                },
              ])
              .then((response) => {
                const firstNameToAdd = response.firstName;
                const lastNameToAdd = response.lastName;
                const roleIDToResponse = response.roleID
                const roleIDToSplit = roleIDToResponse.split(" ");
                const roleIDToAdd = roleIDToSplit[1];
                const managerIDToResponse = response.managerID;
                const managerIDSplit = managerIDToResponse.split(" ");
                const managerIDToAdd = managerIDSplit[0];

                db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstNameToAdd, lastNameToAdd, roleIDToAdd, managerIDToAdd], (err, result) => {
                  if (err) {
                    console.log(err);
                    return moreQueries.moreQueries();
                  } else {
                    console.log("Employee added!")
                    return moreQueries.moreQueries();
                  }

                })
              })

          }
        })
      }
    });

  };

  updateEmployee() {
    let employeeNames = [];
    let roleIDs = [];
    db.query('SELECT first_name, last_name FROM employee', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        employeeNames = result.map((item) => {
          return `${item.first_name} ${item.last_name}`
        })

        db.query('SELECT id FROM role', (err, result) => {
          if (err) {
            console.log(err);
          }
          roleIDs = result.map((item) => {
            return item.id
          })

          inquirer
            .prompt([
              {
                type: 'list',
                choices: employeeNames,
                name: 'employee',
              },
              {
                type: 'list',
                choices: roleIDs,
                name: 'role',
              }
            ])
            .then((response) => {
              const employeeToUpdate = response.employee;
              const nameParts = employeeToUpdate.split(" ");
              const firstName = nameParts[0];
              const lastName = nameParts[1];
              const newRole = parseInt(response.role);

              db.query('UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?', [newRole, firstName, lastName], (err, result) => {
                if (err) {
                  console.log(err)
                }
                console.log("Employee Role Updated!")
                return moreQueries.moreQueries();
              })
            })
        })
      }
    }
    )
  }
}

//export class to be used in index file
module.exports = CrudDB;