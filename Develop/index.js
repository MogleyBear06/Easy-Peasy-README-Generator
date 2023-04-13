// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},

{
    type: 'input',
    name: 'project description',
    message: 'Please describe your project',
},

{
    type: 'input',
    name: 'license',
    message: 'Please select a license from the following options',
},
{
    type: 'input',
    name:'gitbhub username',
    message: 'Please enter your git hub username',
},
{
    type:'input',
    name: 'email address',
    message: 'What is your email address?',
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
