// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');


const inquirer = require('inquirer'); 

const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    prompt: "What is the title of your project?",
    name: "title",
    },
     {
        type: "input",
        prompt: "What is your project for? Describe it in detail.",
        name: "description",

    }, {
        type: "input",
        prompt: "Table of contents",
        name: "tableOfcontents", 

    }, 
     {
        type: "input",
        prompt: "What are the installation instructions for your project?",
        name: "installation",
    }, {
        type: "input",
        prompt: "How will your app be used?",
        name: "usage", 

    }, {
        type: "input",
        prompt: "Licenses",
        name: "What license, if any, was used for this project?", 



    }, {
      type: "input",
      prompt: "Who contributed to this project?",
      name: "contributing",
    }, {
      type: "input",
      prompt: "tests",
      name: "tests", 
    }
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Congrats! README file '${fileName}' created successfully.`);
      });

} 

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers); 
      const fileName = 'README.md';
      writeToFile(fileName, markdownContent);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
