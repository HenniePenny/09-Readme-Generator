const inquirer = require("inquirer");
const fs = require("fs");

//how to create a file that is called "README.md"?
const writeReadmeFile = (filename, readmeFile) => {
  fs.writeFile(`${filename}.md`, readmeFile, (err) =>
    err ? console.log(err) : console.log("Your README.md file was created!")
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
    const filename =
    const yourReadme = generateReadmeFile(answer);
    writeReadmeFile(filename, yourReadme);
  });

const generateReadmeFile = (answer) => {
  const readmeTemplate = `
  # ${answer.projectTitle}

  ![type of badge](link to badge)

  ## Description

  ${answer.description}

  ## Table of contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${answer.installation}

  ## Usage

  ${answer.usage}

  ## License

  text here

  ## Contributing

  ${answer.contributing}

  ## Tests

  ${answer.tests}

  ## Questions?

  Checkout my [GitHub profile](${answer.GitHubUsername})
  Should you have any additional questions, please reach out to me via [email](${answer.email}).`;
  return readmeTemplate;
};
