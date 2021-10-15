function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
        break;
      case "GNU GPLv3":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
        break;
      case "Apache License 2.0":
        return "[![License: GPL v3](https://img.shields.io/badge/license-Apache-blue)]"
        break;
    }
  
  }

  function renderLicenseLink(license) {
  
    switch (license) {
      case "MIT":
        return "(https://mit-license.org/)"
        break;
      case "GNU GPLv3":
        return "(https://www.gnu.org/licenses/gpl-3.0)"
        break;
      case "Apache License 2.0":
        return "(https://www.apache.org/licenses/LICENSE-2.0)"
        break;
    }
  
  }
  

  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
    
    ## Description
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    *Steps to install project and get it working:*
    ${data.installation}
    ## Usage
    *Instructions and/or examples for use:*
    ${data.usage}
    ## Credits
    ${data.credits}
    ## License
    License: ${data.license}
    [Link]${renderLicenseLink(data.license)}
    ## Tests
    *Tests for application and shows how to run it:*
    ${data.test}
    ## Questions
    * Questions? Contact me at [GitHub profile](https://github.com/${data.github})
    * Reach me by email @ ${data.email}. 
  `;
  }
  
  module.exports = generateMarkdown;