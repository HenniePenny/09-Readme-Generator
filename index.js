const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");
const generateReadmeFile = require("./utils/generateMarkdown");

//writing a "demo_README.md" file, so that it does not overwrite this own project's README
const writeReadmeFile = (readmeFile) => {
  fs.writeFile(`demo_README.md`, readmeFile, (err) =>
    err
      ? console.log(err)
      : console.log(chalk.greenBright("Your demo_README.md file was created!"))
  );
};

//creating the questions array inside the function to initialize the app
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: chalk.magenta("What is the title of your project?"),
    },
    {
      type: "input",
      name: "description",
      message: chalk.magenta("Please describe your project here."),
    },
    {
      type: "input",
      name: "installation",
      message: chalk.magenta("What are the installation instructions?"),
    },
    {
      type: "input",
      name: "usage",
      message: chalk.magenta(
        "Provide instructions and examples for usage here:"
      ),
    },
    {
      type: "list",
      name: "license",
      message: chalk.magenta("Choose a license badge."),
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
          value: undefined,
        },
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: chalk.magenta(
        "How can other developers contribute to your project? What are the guidelines to follow?"
      ),
    },
    {
      type: "input",
      name: "tests",
      message: chalk.magenta(
        "Please provide examples here on how to run the tests for your application."
      ),
    },
    {
      type: "input",
      name: "GitHubUsername",
      message: chalk.magenta("What is your GitHub username?"),
    },
    {
      type: "input",
      name: "email",
      message: chalk.magenta("What is your email address?"),
    },
  ])
  .then((answer) => {
    const yourReadme = generateReadmeFile(answer);
    writeReadmeFile(yourReadme);
  });
