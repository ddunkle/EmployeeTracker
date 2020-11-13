const inquirer = require("inquirer")


function addNew(connection) {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Select a choice to add",
      choices: [
        "Employee",
        "Department",
        "Role",
        "Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Employee":
          employee();
          break;

        case "Department":
          department();
          break;

        case "Role":
          role();
          break;

        case "Exit":
          break;
      }
    });

};

function employee() {
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
          return;
        })
    });
}

module.exports = addNew;
