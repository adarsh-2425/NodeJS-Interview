async function fetchFromMultipleAPIs(apis, callback) {
  try {
    const promises = apis.map(async (api) => {
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${api}`);
      }

      return response.json();
    });

    const results = await Promise.all(promises);

    // Combine the results into a single array
    const combinedData = [].concat(...results)

    callback(null, combinedData);
  } catch (err) {
    callback(err);
  }
}


const apiUrls = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2',
'https://jsonplaceholder.typicode.com/users/3'            ];

fetchFromMultipleAPIs(apiUrls, function (error, combinedData) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Combined Data:', combinedData);
  }
});
