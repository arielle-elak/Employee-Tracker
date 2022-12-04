// Import for file writing
const fs = require("fs");
const path = require("path");

// Function to write setAnswers.js file
const writeToFile = (fileName, data) => {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

module.exports = writeToFile;
