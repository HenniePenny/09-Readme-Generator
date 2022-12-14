# 09-Readme-Generator

This is a command-line application which dynamically generates a "demo_README.md". The app has been created using Node.js and the inquirer and chalk package.

## Acceptance Criteria

GIVEN a command-line application that accepts user input  
WHEN I am prompted for information about my application repository  
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
WHEN I enter my project title  
THEN this is displayed as the title of the README  
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions  
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests  
WHEN I choose a license for my application from a list of options  
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under  
WHEN I enter my GitHub username  
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile  
WHEN I enter my email address  
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions  
WHEN I click on the links in the Table of Contents  
THEN I am taken to the corresponding section of the README

## Installation and Usage

First you need to install the needed packages by running the command `npm install` in your terminal. Afterwards, initiate the app by typing `node index.js`. You will be prompted with a series of questions: give your answer or make a choice accordingly. A README file will be created containing the above-mentioned sections according to your input. The questions will look like this:

![Screenshot of the app in the terminal](./assets/Screenshot_terminal.JPG)

## Sources

- [A template for creating open source contributor guidelines](https://opensource.com/life/16/3/contributor-guidelines-template-and-tips)

## Links

- [Link to walk-through video](https://drive.google.com/file/d/1uK-RuH37N8vB60FWkCssozpO2j3i3-l1/view)
- [GitHub Repository](https://github.com/HenniePenny/09-Readme-Generator)
