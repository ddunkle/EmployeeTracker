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

connection.connect(function(err) {
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
      .then(function(answer) {
        switch (answer.action) {
        case "Add an employee, department, or role":
          add();
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

  