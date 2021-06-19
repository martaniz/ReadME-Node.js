
//markdown.js file 

function renderLicenseBadge(license) {
  let licenseType = license.license; // i think this is problem #1
  let yourLicense = ''
  if(license === 'MIT') {
    license = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Apache') {
    license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GNU') {
    license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    license.license = "N/A"
  }
  return license;
};







// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  
  ## Table of contntent 
  * [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Usage  
${data.usage}
## Contributors
${data.contribution}
## License
${renderLicenseBadge(data.licenses)}

## Github
Contact me through Github at [${data.github}](https://github.com/${data.github}/) or by email through ${data.email}.`;
}




module.exports = generateMarkdown;
