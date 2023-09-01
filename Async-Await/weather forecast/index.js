const readline = require('readline');
const { getWeather } = require('./weatherApi');

// creating interface for command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// asking question
function ask(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    })
  })
}

// Main Function
async function main() {
  try {
    console.log('Weather Forecast App');

    const city = await ask('Enter City Name: ');
    const weatherData = await getWeather(city);

    console.log(`Weather Forecast for ${city}`);
    console.log(`Temperature is ${weatherData.main.temp}`);
    console.log(`Humidity is ${weatherData.main.humidity}`);
  
  } catch(err) {
    console.error('error loading data: ' + err.message);
  } finally {
    rl.close();
  }
}

main()
