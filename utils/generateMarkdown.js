//If the user does not want include the test section and leaves it empty, don't create the section
// const conditionalRender = (answer, section) => {
//   if (answer[section]) {
//     return `
// ## Tests

// ${answer[section]}
// `;
//   } else return "";
// };

//If the user chooses "none" as their license, don't create the section in the README
const renderLicenseSection = (answer, section) => {
  //if it is not a falsy value (i.e. undefined), then it is returned as true
  if (answer[section]) {
    return `
## License
  
${addLicenseDescription(answer[section])}
`;
  } else return "";
};

const createBadge = (license) => {
  const chosenBadge = {
    gnu: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    mozilla:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    none: "",
  };
  return chosenBadge[license];
};

//pass in the license description with link, if there is no license, return empty string
const addLicenseDescription = (license) => {
  const chosenLicense = {
    gnu: "Licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)",
    mit: "Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).",
    mozilla:
      "Licensed under the [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)",
    none: "",
  };
  return chosenLicense[license];
};

//generate the markdown for the README file
const generateReadmeFile = (answer) => {
  //pass in the license according to selection, or empty string if no license

  //
  const readmeTemplate = `
  # ${answer.projectTitle}
  
  ${createBadge(answer.license)}
  
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
  
  ${renderLicenseSection(answer, "license")}
    
  ## Contributing
  
  ${answer.contributing}
  
  ## Tests

  ${answer.tests}
    
  ## Questions?
  
  Checkout my [GitHub profile](https://github.com/${answer.GitHubUsername})<br/>
  Should you have any additional questions, please reach out to me via [email](${
    answer.email
  }).`;
  return readmeTemplate;
};

module.exports = generateReadmeFile;

// ## License

//   ${addLicenseDescription(answer.license)}

// ${conditionalRender(answer, "tests")}
