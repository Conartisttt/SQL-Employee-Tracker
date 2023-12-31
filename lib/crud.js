// Import and require mysql2
const mysql = require('mysql2');

const inquirer = require('inquirer');


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



class CrudDB {
  constructor(searchTerm) {
    this.searchTerm = searchTerm;
  }
  viewDepartments() {
    db.query('SELECT * FROM department', (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  };
  viewRoles() {
    db.query('SELECT * FROM role', (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  };
  viewEmployees() {
    db.query('SELECT * FROM employee', (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
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
        console.log("add department to table query here")
        return
      })
  };
  addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "Enter name of role",
          name: 'roleName',
          validate: (answer) => !answer ? "You must provide a role name" : true
        },
        {
          type: 'input',
          message: "Enter salary amount",
          name: 'salaryAmount',
          validate: (answer) => !answer ? "You must provide a salary amount" : true
        },
        {
          type: 'input',
          message: "Enter department ID for role",
          name: 'departmentID',
          validate: (answer) => !answer ? "You must provide a salary amount" : true
        }
        // {
        //   type: 'list',
        //   message: "Which department is this role under?",
        //   //TODO: query db for current department options so that this is dynamic to change?????
        //   choices: [
        //     {
        //       name: 'department name',
        //       value: 'department ID'
        //     },
        //     {
        //       name: 'department name',
        //       value: 'department ID'
        //     },
        //     {
        //       name: 'department name',
        //       value: 'department ID'
        //     },
        //     {
        //       name: 'department name',
        //       value: 'department ID'
        //     },
        //   ],
        //   name: 'departmentName',
        //   validate: (answer) => !answer ? "You must provide a salary amount" : true
        // },
      ])
      .then((response) => {
        const roleNameToAdd = response.roleName;
        const salaryAmountToAdd = response.salaryAmount;
        const departmentNameToAdd = response.departmentID;
        console.log("add role to table query here")
        return
      })
  };
  addEmployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "Enter first name of employee",
          name: 'firstName',
          validate: (answer) => !answer ? "You must provide a department name" : true
        },
        {
          type: 'input',
          message: "Enter last name of employee",
          name: 'lastName',
          validate: (answer) => !answer ? "You must provide a department name" : true
        },
        {
          type: 'input',
          message: "Enter role ID for employee",
          name: 'roleID',
          validate: (answer) => !answer ? "You must provide a department name" : true
        },
        {
          type: 'input',
          message: "Enter managerID for employee",
          name: 'managerID',
          validate: (answer) => !answer ? "You must provide a department name" : true
        },
      ])
      .then((response) => {
        const firstNameToAdd = response.firstName;
        const lastNameToAdd = response.lastName;
        const roleIDToAdd = response.roleID;
        const managerIDToAdd = response.managerID;

        console.log("add employee to table query here")
        return
      })
  };
  updateEmployee() {
    inquirer
      .prompt([
        {
          type: 'list',
          //query database to get a list of all employees, push to choices array below
          choices: [
            "employee1",
            "employee2",
            "employee3",
            "employee4",
            "employee5",
            "employee6",
          ],
          name: 'employee',
        },
        {
          type: 'list',
          //query database to get a list of all roles, push to choices array below
          choices: [
            "role1",
            "role2",
            "role3",
            "role4",
            "role5",
            "role6",
          ],
          name: 'role',
        }
      ])
      .then((response) => {
        const employeeToUpdate = response.employee;
        const newRole = response.role;
        console.log("update employee role in table query here")
        return
      })
  }
}

module.exports = CrudDB;