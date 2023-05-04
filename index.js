//revisit module 9 challenge

const inquirer = require('inquirer')
const fs = require("fs")
const emptyArray = []
const Manager = require('./lib/manager.js')
const Intern = require('./lib/intern.js')
const Engineer = require('./lib/engineer.js')

inquirer.prompt([
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is employee's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee's office number?",
        name: "officenumber"
    },
])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber)
        manager.special = answers.officenumber
        emptyArray.push(manager)
        doNext()
    })

function doNext() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do next?",
            name: "next",
            choices: ["Add intern", "Add engineer", "Quit"]
        },

    ])
        .then(answers => {
            if (answers.next == "Add intern") {
                addIntern()
            }
            else if (answers.next == "Add engineer") {
                addEngineer()
            }
            else { buildTeam() }
        })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is employee's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the employee's school?",
            name: "school"
        },
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            intern.special = answers.school
            emptyArray.push(intern)
            doNext()
        })

}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is employee's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the employee's github username?",
            name: "github"
        },
    ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            engineer.special = `<a href="https://github.com/${answers.github}">github</a>`
            emptyArray.push(engineer)
            doNext()
        })

}

function buildTeam() {
    fs.writeFileSync("./dist/team.html", `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <h1>My Team</h1>
        `)
    for (let i = 0; i < emptyArray.length; i++) {
        fs.appendFileSync("./dist/team.html", `
            <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${emptyArray[i].name}</li>
          <li class="list-group-item">${emptyArray[i].email}</li>
          <li class="list-group-item">${emptyArray[i].id}</li>
          <li class="list-group-item">${emptyArray[i].getRole()}</li>
          <li class="list-group-item">${emptyArray[i].special}</li>
        </ul>
      </div>
            `)

    }
    fs.appendFileSync("./dist/team.html", `
        </body>
</html>
        `)
}
