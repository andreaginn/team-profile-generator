//revisit module 9 challenge

const inquirer = require('inquirer')
const fs = require("fs")
const emptyArray = []


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
        emptyArray.push(manager)
    })

