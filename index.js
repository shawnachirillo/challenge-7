// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import { type } from "os";
import { error } from "console";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the tite of your project?",   
    },

    {
        type: "input",
        name: "description",
        message: "Provide a description of the project.",
    },
{
    type: "input",
    name: "installation",
    message: "Please give installation information.",
},
{
    type: "input",
    name: "usage",
    message: "Please give ways to use this project.",
},
{
    type: "input",
    name: "constributing",
    message: "Please provide the contribution instructions.",
},
{
    type: "input",
    name: "tests",
    message: "Please provide test instructions.",
},
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address.",
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
    if (err) {
        console.log("There was an error. Please try again");
    } else {
                console.log("Congrats! Your file has been created!");
                }
            });
        }
//README generator
function createREADME(answers) {
    return `
    #${answers.title}
## Description
${answers.description}
## License
Licensed Project

## Questions
Any questions please reach out.
`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {
        const readmeContent = createREADME(answers);
            writeToFile('README.md', readmeContent);
        });
}

// Function call to initialize app
init();
