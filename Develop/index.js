const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// fs.writeFile('README.md', generateMarkdown(answers), err => {
//  if (err) throw err;

//  console.log('README complete! Check out index.html to see the output!');
// });




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// TODO: Create an array of questions for user inpu

const questions = [
  {   
      type: "input",
      message: "What is the title of the project?",
      name: "title"
  },
//   {   
//     type: "input",
//       message: "Please provide a table on content",
//       name: "table of content"
//   },
  {   
    type: "input",
      message: "What is the name of the user?",
      name: "userName"
  },
  {  
    type: "input",
      message: "Please provide a description of the project",
      name: "description"
  },
  {   
    type: "input",
      message: "What is the installation process?",
      name: "installation"
  },
  {   
    type: "input",
      message: "How will this project be used?",
      name: "usage"
  },
  {   
      type: "rawlist",
      message: "What licenses are required with this project?",
      name: "licenses",
      choices: ['MIT', 'Apache', 'GNU', 'none']
  },
  {   
    type: "input",
      message: "Who were the contributors to this project?",
      name: "contribution"
  },
  {   
    type: "input",
      message: "What is the test process for this project?",
      name: "test"
  },
  {   
    type: "input",
      message: "What is the user github username?",
      name: "github"
  },
  {
    type:"input",
    message:"Enter Email address?",
    name:"email"
}


]

function runQuestions() {
    inquirer.prompt(questions)
    .then((answers) => {
        makeMarkdown(answers) 
        // run a function that makes a markdown file out of the user input
        console.log(generateMarkdown(answers))

    })
}

function makeMarkdown(data) {
    fs.writeFile('README.md', generateMarkdown(data), err => {
    if (err) throw err;
    console.log('README complete! Check out index.js to see the output!');
 })
};





runQuestions();


