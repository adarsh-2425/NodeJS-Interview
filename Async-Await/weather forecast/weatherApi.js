// Get weather details from openweather api
async function getWeather(city) {  
 const apiKey = process.env.apiKey;
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error('error fetching api: ' + err.message);
  }
}

module.exports = {
  getWeather
}
