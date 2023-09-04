## Question:

You are building a simple RESTful API for managing a list of tasks. You want to implement a route that allows users to create and save new tasks to a JSON file. Each task should have an id, title, description, and a completed status. Your task is to create an Express.js route that handles the creation and saving of new tasks to a JSON file.

Your task:

- Create an Express.js route that listens for POST requests at the endpoint /api/tasks.
- Implement validation to ensure that the request body contains the required fields: title, description, and completed. The completed field should be a boolean value.
- Generate a unique identifier (id) for each new task.
- Create a new task object and add it to an array of tasks.
- Save the updated array of tasks to a JSON file on the server.
- Return a JSON response with the newly created task and an appropriate status code.

Your JSON file should initially contain an empty array [] to store tasks.
