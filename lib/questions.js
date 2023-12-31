const questions = [
  {
    type: 'list',
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add A Department",
      "Add A Role",
      "Add An Employee",
      "Update An Employee Role"
    ],
    name: 'InitialQuestion',
  }
]

module.exports = questions;