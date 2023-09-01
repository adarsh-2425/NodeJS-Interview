function fetchData(callback) {
  setTimeout(() => {
    const data = 'Hello World!';
    callback(data);
  }, 5000);
}

function print(result) {
  console.log(result)
}

fetchData(print);
