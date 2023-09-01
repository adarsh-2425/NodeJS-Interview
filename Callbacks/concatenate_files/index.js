const fs = require('fs');

function concatenateFiles(filePaths, callback) {
  const result = [];
  let currentIndex = 0;

  function readNextFile() {
    if (currentIndex < filePaths.length) {
      const filePath = filePaths[currentIndex];

      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          callback(err);
        } else {
          result.push(data);
          currentIndex++;
          readNextFile();
        }
      });
    } else {
      callback(null, result.join(''))
    }
}
  readNextFile()
}


const files = ['file1.txt', 'file2.txt'];
concatenateFiles(files, (err, data) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('Data: ', data);
  }
})
