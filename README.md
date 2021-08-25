# READ-GEN
###### Developed by [*ca2los*](https://github.com/ca2los) 
VERSION 1.0 

### *README.md File Generator*
Read-Gen allows you to *automate the creation of a README.md file* from your terminal
console in a few steps, without losing track of the most important topics in your 
welcome file. Everytime you execute the program, Read-Gen will create a standardized 
file with the content you entered.

### Installation
In order to run *Read-Gen*, you must make sure **Node JS** and **NPM** are already 
installed in your computer. 

#### *Node JS*
To check if **Node JS** is already installed, from your `Terminal Console` enter the 
command `node -v` and press the **ENTER** key. It will show you a message with the 
version of Node only if the package was installed before. If the message is different, 
[click the link](https://nodejs.org/en/) and download the recommended version of the 
package and install it.

#### *NPM*
To check if **NPM** is already installed, from your `Terminal Console` enter the
command `npm -v` and press the **ENTER** key. It will show you a message with the
version of Node only if the package was installed before. If the message is different,
then enter the command `npm install`and press the **ENTER** key.

### How to use it
From your terminal console, go through your files and locate the folder you want
to work in. Now enter the command `npm init -y` and press the **ENTER** key. Now 
do the same with the command `npm i inquirer --save` and press the **ENTER** key.

Once the packages are installed, from your terminal console and in the same folder 
run the command `touch index.js`and press ENTER. Now enter the command `node index.js`
and press ENTER. Finally, when the program starts you will need to access the requested
data and press ENTER to save the data.

```text
    // Command to initialize the program
    $ node index.js
    
    // Now the program asks you to start filling with data
    ? Project title: 
```

#### *WHAT IT DOES?*
1. The `npm init -y` creates a new JSON file loading the main settings of NPM libraries.
2. While `npm i inquirer --save` adds the library **Inquirer** into the JSON generated 
by the previous command.

### SYNTAX

KEY | VALUE
------------ | -------------
`Project title` | Name the title of the project
`Description title` | Describe in few words the title
`Short description` | Describe what the project does in less than two paragraphs
`Install title` | Set the title for the Installation section
`Install tutorial` | Describe how to install your package or project
`Usage title` | Set the title for the Usage section
`Usage tutorial` | Describe how to use the project and as specific as you can
`Contribution title` | Set the title for the Contribution section
`Contribution guidelines` | Set the rules for contributions
`Testing title` | Set the title for the Testing section
`Testing status` | Specify if you are working on features or improvements
`Type of license` | Set the type of License you want
`My GitHub user` | Set your GitHub user
`My E-Mail address` | Set your E-Mail address

### Libraries
**[*INQUIRER LINK*](https://www.npmjs.com/package/inquirer)** Library for asking questions, answer validator, and parsing input from an array system.

**[*FS LIBRARY LINK*](https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/)** Helpful to read, write and append a file from the Terminal.

### Contributions
Let me know if you are interested in upgrading the base code of the program. [Contact 
me via GitHub](https://github.com/ca2los), and commit your changes.

### Testing 
I want to upgrade the code to make tables, quotes, code fragments, images and all the
markdown's syntax available into the program.

### MIT License
###### Developed by [*ca2los*](https://github.com/ca2los) 