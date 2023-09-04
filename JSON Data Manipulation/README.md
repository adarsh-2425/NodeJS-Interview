## Question: JSON Data Manipulation

You are building a web application that deals with a list of tasks. The tasks are represented as JSON objects with the following structure:  

```json
{
  "id": 1,
  "title": "Task 1",
  "completed": false
}
```
You need to implement two functions: one to parse JSON data and another to stringify JSON data. Additionally, you need to implement a feature to toggle the "completed" status of a task given its ID.

Here are the specific tasks to complete:

- Implement a parseTasks function that takes a JSON string as input and returns an array of task objects.

- Implement a stringifyTasks function that takes an array of task objects and returns a JSON string.

- Implement a toggleTaskStatus function that takes an array of task objects, a task ID, and toggles the "completed" status of the task with that ID. If the task is completed, set it to incomplete, and vice versa.
