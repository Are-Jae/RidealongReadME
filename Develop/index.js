// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    prompt: "What is the title of your project?",
    name: "Title",
    },
     {
        type: "input",
        prompt: "What is your project for? Describe it in detail.",
        name: "Description",

    }, {
        type: "input",
        prompt: "Table of contents",
        name: "Table of contents", 

    }, 
     {
        type: "input",
        prompt: "What are the installation instructions for your project?",
        name: "Installation",
    }, {
        type: "input",
        prompt: "Usage",
        name: "How will your app be used?", 

    }, {
        type: "input",
        prompt: "Licenses",
        name: "What license, if any, was used for this project?", 



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
    .promptUser(questions)
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
