const express = require('express');
const app = express();

const port = process.env.port || 3000;

const json = {
  "id": 1,
  "title": "Task 1",
  "completed": false
}


// Function to parse json
function parseTasks(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null; // Return null or an empty array in case of an error
  }
}


// Function to convert string to json
function stringifyTasks(arrayData) {
  if (Array.isArray(arrayData)) {
    try {
      const jsonData = JSON.stringify(arrayData);
      return jsonData;
    } catch (error) {
      console.error('Error stringifying JSON:', error);
      return null; // Return null or an empty string in case of an error
    }
  } else {
    console.error('Input is not an array.');
    return null; // Return null if the input is not an array
  }
}


// Function to toggle status
function toggleTaskStatus(id, tasks) {
  const task = tasks.find(task => task.id === id);

  if (task) {
    // Toggle the "completed" status
    task.completed = !task.completed;
    return task;
  } else {
    console.error('Task not found.');
    return null; // Return null if the task with the given ID is not found
  }
}


console.log(parseTasks(json))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
