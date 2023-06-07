// TODO: Include packages needed for this application

const inquirer = require ("inquirer");

const fs = require('fs');

const utils = require("util")

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    prompt: "What is the title of your project?",
    name: "Title", {
        type: "input",
        prompt: "What is your project for? Describe it in detail.",
        name: "Description",

    }, {
        type: 
        prompt: 
        name: 

    }, {
        type: "input",
        prompt: "Table of contents",
        name: "Table of contents", 


    }, {
        type: "input",
        prompt: "What are the installation instructions for your project?",
        name: "Installation",
    }, 
    
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
