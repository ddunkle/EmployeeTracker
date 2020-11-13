var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",

  // Your password
  password: "dmdunkle",
  database: "emp_trackerDB"
});

connection.connect(function (err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add an employee, department, or role",
        "View employees, departments, or roles",
        "Make an update",
        "Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add an employee, department, or role":
          addNew();
          break;
        case "View employees, departments, or roles":
          view();
          break;
        case "Make an update":
          update();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

function addNew() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Select a choice to add",
      choices: ["Employee","Department","Role","Exit"]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Employee":
          addEmployee();
          break;
        case "Department":
          addDepartment();
          break;
        case "Role":
          addRole();
          break;
        case "Exit":
          break;
      }
    });

};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name?",
        name: "first_name"
      },
      {
        type: "input",
        message: "What is the last name?",
        name: "last_name"
      }
    ]).then(function (response) {
      var query = "INSERT INTO EMPLOYEE SET ?";
      connection.query(query,
        {
          first_name: response.first_name,
          last_name: response.last_name
        }, function (err, res) {
          if (err) throw err;
          console.log("successfully added")
          start();
        })
    });
}
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "dept_name"
      }
    ]).then(function (response) {
      var query = "INSERT INTO DEPARTMENT SET ?";
      connection.query(query,
        {
          name: response.dept_name
        }, function (err, res) {
          if (err) throw err;
          console.log("successfully added")
          start();
        })
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role would you like to add?",
        name: "title"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary"
      }
    ]).then(function (response) {
      var query = "INSERT INTO ROLE SET ?";
      connection.query(query,
        {
          title: response.title,
          salary: response.salary
        }, function (err, res) {
          if (err) throw err;
          console.log("successfully added")
          start();
        })
    });
}


