// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},

{
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
},

{
    type: 'input',
    name: 'installation',
    message: 'Please include the installation instructions',
},

{
    type: 'input',
    name: 'usage',
    message: 'Please include the apps usage information',
},

{
    type:'input',
    name: 'license',
    message: 'Which license does your application use?',
    choices: ["MIT", "GPLv2", "Apache", "BSD", "None"],
},

{
    type:'input',
    name: 'contributing',
    message: 'Please include contribution guidelines',
},
{
    type: "input",
    message: "Please provide test instructions:",
    name: "tests",
  },
{
    type: 'input',
    name:'username',
    message: 'Please enter your git hub username',
},

{
    type: "input",
    message: "What is your email address?",
    name: "email",
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      }

      else {
        console.log('README.md file created!');
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
      });
}

// Function call to initialize app
init();
