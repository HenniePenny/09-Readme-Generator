const conditionalRender = (answer, section) => {
  if (answer[section]) {
    return `
    ## Tests
  
    ${answer[section]}
    `;
  } else return "";
};

const generateReadmeFile = (answer) => {
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
  
  ## License
  
  ${addLicenseDescription(answer.license)}
  
  ## Contributing
  
  ${answer.contributing}
  
  ${conditionalRender(answer, "tests")}
    
  ## Questions?
  
  Checkout my [GitHub profile](https://github.com/${answer.GitHubUsername})<br/>
  Should you have any additional questions, please reach out to me via [email](${
    answer.email
  }).`;
  return readmeTemplate;
};

module.exports = generateReadmeFile;
