/*Your task is to create a JavaScript program that downloads two files from different URLs asynchronously using both Promises and Async/Await. 
The goal is to understand and demonstrate how these asynchronous patterns work for managing multiple file download operations.*/

const fs = require('fs');
const https = require('https');

const url1 = 'https://www.africau.edu/images/default/sample.pdf';
const url2 = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

async function downloadFiles(url1, url2) {
  try {    
    const file1 = await https.get(url1, res => {
    const fileStream1 = fs.createWriteStream('file1.pdf');
      res.pipe(fileStream1);
    fileStream1.on('finish', () => {
      console.log('file1 downloaded');
    })
  });

    const file2 = await https.get(url2, res => {
      const fileStream2 = fs.createWriteStream('file2.pdf');
      res.pipe(fileStream2);
      fileStream2.on('finish', () => {
        console.log('file2 downloaded')
      })
    });
    
  } catch (err) {
    console.error(err.message);
  }
  
}

downloadFiles(url1, url2);
