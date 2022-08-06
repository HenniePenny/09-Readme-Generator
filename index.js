const inquirer = require("inquirer");
const fs = require("fs");

//TODO how to create a file that is called "README.md"?
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
      type: "list",
      name: "license",
      message: "Choose a license badge.",
      choices: [
        "GNU General Public License v3.0",
        "MIT License",
        "Mozilla Public License 2.0",
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
    writeReadmeFile(filename, yourReadme);
  });

const generateReadmeFile = (answer) => {
  //TODO how can I call this the right way?
  const createBadge = (license) => {
    const chosenBadge = {
      gnu: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      mozilla:
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    };
    //TODO fix this [license]??
    return createBadge(license);
  };

  //TODO create function for adding the license description. How can I call it?
  const addLicenseDescription = (license) => {
    const chosenLicense = {
      gnu: "Licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)",
      mit: "Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).",
      mozilla:
        "Licensed under the [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)",
    };
    return addLicenseDescription(license);
  };

  const readmeTemplate = `
# ${answer.projectTitle}

//Todo fix this
${this.createBadge(answer.license)}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${answer.description}

## Installation

${answer.installation}

## Usage

${answer.usage}

## License

//Todo fix this
${this.addLicenseDescription(answer.license)}

## Contributing

${answer.contributing}

## Tests

${answer.tests}

## Questions?

Checkout my [GitHub profile](${answer.GitHubUsername})<br/>
Should you have any additional questions, please reach out to me via [email](${
    answer.email
  }).`;
  return readmeTemplate;
};
