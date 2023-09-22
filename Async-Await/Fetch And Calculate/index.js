const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

async function fetchAndCalculateSum(urls) {
  let sum = 0;
  try {
    for (const url of urls) {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      }
      
      const data = await response.json();

      if (!data.hasOwnProperty('id')) {
        throw new Error(`JSON response from ${url} does not contain 'number' property.`);
      }
      
      sum += data.id;
    }
  return sum;
  } catch (error) {
    console.error(error.message);
    res.status(400).send('server error');
  }
}

const urls = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2', 'https://jsonplaceholder.typicode.com/users/3'];
fetchAndCalculateSum(urls)
  .then((sum) => {
    console.log(`Sum of numbers: ${sum}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

// server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
