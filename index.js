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
        name: 'install',
        message: 'Write a detailed guide of how to install your application.', 
    }, 

    // Deployed Project Link
    {
        type: 'input',
        name: 'link',
        message: 'What is the url link for your deployed application?', 
    }, 
    // Usage Instructions 
    {
        type: 'input',
        name: 'usage',
        message: 'Write a description informing users how your application runs.', 
    }, 

    // License 
    {
        type: 'input',
        name: 'license',
        message: 'Which license covers your application?', 
        choices: ['MIT', 'Apache 2.0', 'GPL-3-0', 'BSD 3', 'Creative Commons', 'Unlicensed']
    }, 

    // Contributors 
    {
        type: 'input',
        name: 'constribute',
        message: 'In detail, add guidelines and accurate information for users when contributing to your work.', 
    }, 

    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Write a detailed guide informing users on how to properly test this application.',  
    }, 

    // Github username input 
    {
        type: 'input',
        name: 'username',
        message: 'What is the username for your github profile?', 
    }, 

    // Email input 
    {
        type: 'input',
        name: 'email',
        message: 'Enter a preferred email for users to contact you with any questions, comments, and concerns.',
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



