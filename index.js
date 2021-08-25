// REQUIRE: Importing the external libraries
const inquire = require('inquirer');
const fs = require('fs');
const set_up = (title,description_title,description_short,install_title,install_tutorial,usage_title,usage_tutorial,contribution_title,contribution_guidelines,testing_title,testing_status,list_choices,github,email) =>
`
#${title}\n
###${description_title}\n
${description_short}\n 
##${install_title}\n
${install_tutorial}\n 
##${usage_title}\n
${usage_tutorial}\n 
##${contribution_title}\n
${contribution_guidelines}\n 
##${testing_title}\n
${testing_status}\n
###${list_choices}\n
####${github}\n
####${email}\n
`;

// PROMPT: It's from the Inquire library and it asks questions
inquire.prompt([
    {
        type: 'input',
        message: 'Project title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description title:',
        name: 'description_title',
    },
    {
        type: 'input',
        message: 'Short description:',
        name: 'description_short',
    },
    {
        type: 'input',
        message: 'Install title:',
        name: 'install_title',
    },
    {
        type: 'input',
        message: 'Install tutorial:',
        name: 'install_tutorial',
    },
    {
        type: 'input',
        message: 'Usage title',
        name: 'usage_title',
    },
    {
        type: 'input',
        message: 'Usage tutorial',
        name: 'usage_tutorial',
    },
    {
        type: 'input',
        message: 'Contribution title',
        name: 'contribution_title',
    },
    {
        type: 'input',
        message: 'Contribution guidelines',
        name: 'contribution_guidelines',
    },
    {
        type: 'input',
        message: 'Testing title',
        name: 'testing_title',
    },
    {
        type: 'input',
        message: 'Testing status',
        name: 'testing_status',
    },
    {
        type: 'list',
        message: 'Type of license',
        name: 'list_choices',
        choices: [
            'MIT License',
            'The Unlicense',
            'Apache License 2.0',
            'Boost Software License 1.0'
        ]
    },
    {
        type: 'input',
        message: 'My GitHub user:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'My E-Mail address:',
        name: 'email'
    }

]).then((response) => {
    // FS: The library method 'appendFile' creates a new file to store the content
    const invoke = set_up(
        response.title,
        response.description_title,
        response.description_short,
        response.install_title,
        response.install_tutorial,
        response.usage_title,
        response.usage_tutorial,
        response.contribution_title,
        response.contribution_guidelines,
        response.testing_title,
        response.testing_status,
        response.list_choices,
        response.github,
        response.email
    );
    fs.appendFile('README.md',invoke,(err) => err ? console.error(err) : console.log('Commit logged!'));
});

/*
fs.appendFile(
        'README.md',
        // The back ticks concatenate the object's items to the argument of the function
        `${response.title}\n, ${response.description}\n, ${response.install}\n, ${response.usage}\n, ${response.guideline}\n, ${response.testing}\n`,
        (err) => err ? console.error(err) : console.log('Commit logged!')
    )
*/

/*
    // I moments like this, when old structures prevail in my memory, I need to type the old functions to avoid confusion :S
    // It's just for mental health XD, let me know what you think.
    function (response) {
        fs.appendFile('README.md', `${response.title}\n, ${response.description}\n, ${response.install}\n, ${response.usage}\n, ${response.guideline}\n, ${response.testing}\n`, function(err){

        })
    }

*/

// My username and my email should be inside a Questions section
// FAQ URL: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

// REQUIRE: It's a built in function to import external libraries into a project
// INQUIRER: Library for asking questions, answer validator, and parsing input from an array system
// FS LIBRARY: Helpful to read, write and append a file from the Terminal


// 1. From the Terminal, access to the folder storing this file.
// 2. From the Terminal, initialize the NPM with: $ npm init -y
// A new file of 'package.json' has been created at the root level of the folder.
// 3. From the Terminal, import 'Inquirer' library: $ `npm i inquirer --save`
// The 'package.json' file now has a log related to the dependency already installed.