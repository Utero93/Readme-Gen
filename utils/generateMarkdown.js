// Function that returns a license badge based on which license is passed in
// If there is no avaliable license, return an empty string
function renderLicenseBadge(license) {

    if (license === 'MIT') {
  
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  
    } else if (license === 'Apache 2.0'){
  
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  
    } else if (license === 'GPL 3.0'){
  
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  
    } else if (license === 'BSD 3'){
  
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  
    } else if (license === 'Creative Commons'){
  
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  
    } else {
  
      return '';
  
    } 
  };


// Function that returns the license section for the README
// If there is no available license, return an empty string

function renderLicenseSection(license) {
  if (license === 'Unlicensed'){

    return '';

  } else {

    return `## License

This project is licensed under the [${license} License] - see LICENSE file for more details.`
  }
};

// Function that returns the license section within the table of contents of the README
// If there is no available license, return an empty string
function renderLicenseToC(license){

  if (license === 'Unlicensed'){
    return '';
  } else {
    return '- [License](#license)'
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
