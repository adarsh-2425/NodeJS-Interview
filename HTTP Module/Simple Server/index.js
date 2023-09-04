const http = require('http');

// Server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
      res.statusCode = 200;
      res.end('Welcome to Home Page!')
    } else if (req.url === '/about') {
      res.statusCode = 200;
      res.end('About Us');
    } else if (req.url === '/contact') {
      res.statusCode = 200;
      res.end('Contact Us')
    } else {
      res.statusCode = 404;
      res.end('Not Found')
    }
  } else {
    res.statusCode = 405;
    res.end('Method not allowed')
  }
})

server.listen(3000, () => {
  console.log(`Server listening at port 3000`)
})
