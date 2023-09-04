Question:
You are tasked with creating a simple Node.js HTTP server that responds to incoming requests with a customized message based on the request path. Implement a Node.js script that accomplishes the following:

- Create an HTTP server that listens on port 8080.
- Handle GET requests with the following behavior:
   - When a GET request is made to the root path ("/"), the server should respond with a "Welcome to the homepage!" message.
   - When a GET request is made to "/about", the server should respond with an "About Us" message.
   - When a GET request is made to "/contact", the server should respond with a "Contact Us" message.
   - For any other path, the server should respond with a "Page not found" message.
- Set the Content-Type header to "text/plain" for all responses.
- Use the http module to create the server and handle requests.  
Your implementation should be clean and well-structured, and you should handle errors gracefully.
