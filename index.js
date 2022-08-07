const inquirer = require("inquirer");
const fs = require("fs");
const generateReadmeFile = require("./utils/generateMarkdown");

const writeReadmeFile = (readmeFile) => {
  fs.writeFile(`demo_README.md`, readmeFile, (err) =>
    err
      ? console.log(err)
      : console.log("Your demo_README.md file was created!")
  );
};

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project here.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use here:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license badge.",
      choices: [
        {
          name: "GNU General Public License v3.0",
          value: "gnu",
        },
        {
          name: "MIT License",
          value: "mit",
        },
        {
          name: "Mozilla Public License 2.0",
          value: "mozilla",
        },
        {
          name: "no license needed",
          value: "none",
        },
      ],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "How can other developers contribute to your project? What are the guidelines to follow?",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Please provide examples here on how to run the tests for your application.",
    },
    {
      type: "input",
      name: "GitHubUsername",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then((answer) => {
    const yourReadme = generateReadmeFile(answer);
    writeReadmeFile(yourReadme);
  });
