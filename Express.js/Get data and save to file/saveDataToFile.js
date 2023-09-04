const fs = require('fs');

function saveDataToFile(data) {
  fs.writeFile('posts.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error('Error saving data to file:', err);
    } else {
      console.log('Data saved to file successfully');
    }
  })
}

module.exports = saveDataToFile;
