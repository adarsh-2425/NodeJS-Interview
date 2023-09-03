const fs = require('fs');
const path = require('path');

// Function to print file names with specific extension
function listFiles(__dirname, extension) {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      files.forEach(file => {
        if (path.extname(file) === extension) {
          console.log(file)
        }
      })
    }
  })
}

// Print files in root directory with .txt extension
listFiles('./', '.txt')
