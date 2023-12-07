// Include the packages needed for this application:

// Import generateMarkdown.js 
const generateMarkdown = require('./utils/generateMarkdown');
// Import inquirer
const inquirer = require('inquirer');
// Import file system
const fs = require('fs');

// Array of questions for user input
const questions = [
    
    // Application Title 
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your application?', 
}, 

    // App Description
    {
        type: 'input',
        name: 'description',
        message: 'Write a detailed description of your application.', 
    }, 

    // Installation Instructions
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?', 
    }, 

    // Deployed Project Link
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?', 
    }, 
    // Usage Instructions 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?', 
    }, 

    // License 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?', 
        choices: ['MIT', 'Apache 2.0', 'GPL-3-0', 'BSD 3', 'Creative Commons', 'Unlicensed']
    }, 

    // Contributors 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?', 
    }, 

    // Tests
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?', 
    }, 

    // Github username input 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?', 
    }, 

    // Email input 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?', 
    }, 

];

// Function to start App 
function init() {

    inquirer 

    // Pass the questions through this function
    .prompt(questions)
    .then((data) => {
        // Use the user input data to create a README.md file 

        // console.log (generatedMarkdown(data));

        const markdownContent = generateMarkdown(data)

        // writes README using the generatedNarkdown module and alerts the user when there are any errors. If there are no errors, the console will log a succes message.
        fs.writeFile('README.md', markdownContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
        );
    
      })
    
    }
    
    
    // Function call to initialize app
    init();



