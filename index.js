const inq = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/genMarkdown.js');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
        validate: (value) => value ? true : "Enter a proper title for the project"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project:',
        validate: (value) => value ? true : "Enter a proper description for the project"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions of your project:',
        validate: (value) => value ? true : "Enter a proper installation instructions for the project"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the examples for use of your project:',
        validate: (value) => value ? true : "Enter a proper examples for the project"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project from the following:',
        choices: ["MIT", "GNU GPLv3", "Apache License 2.0"],
        validate: (value) => value ? true : "Please choose a license for your project"
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter information of any contributors to your project:',
        validate: (value) => value ? true : "Enter a proper contributors or enter NA "
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter information on how to test your project:',
        validate: (value) => value ? true : "Enter a proper information on testing or enter NA"
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username:',
        validate: (value) => value ? true : "Enter a proper information on testing or enter NA"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: (value) => value ? true : "Enter a proper email address"
    },

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Successfully created README file! Please check the directory")
    );
};


function init() {
    inq.prompt(questions).then((data) => {

        writeToFile("README.md", genMD(data));
    });
};


init();