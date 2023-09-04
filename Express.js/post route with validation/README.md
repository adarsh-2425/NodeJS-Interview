## Question:

You are tasked with building a RESTful API for a blog application using Express.js. One of the requirements is to implement the functionality to create a new blog post. Each blog post should have a title, content, and an author's name. Write an Express.js route handler to handle the creation of new blog posts, and ensure that the input data is validated properly.

Your task is to:

- Create an Express.js route that listens for POST requests at the endpoint /api/blog/posts.
- Implement validation to ensure that the request body contains the required fields: title, content, and author.
- Generate a unique identifier for each new blog post.
- Store the new blog post in an array or another data structure for testing purposes.
- Return a JSON response with the newly created blog post and an appropriate status code.
