const express = require('express');
const app = express();

const validateData = require('./validateDataMiddleware');
const saveDataToFile = require('./saveDataToFile');

const port = process.env.port || 3000;

const tasks = []; // Temporarily store tasks data
let taskId = 1; // Initialize task id with 1

// Middleware to parse json body
app.use(express.json());

// POST Route
app.post('/api/tasks', validateData, (req, res) => {
  const { title, description, completed } = req.body;

  const newTask = {
    id: taskId,
    title,
    description,
    completed
  }

  tasks.push(newTask);
  taskId++;
  saveDataToFile(tasks);

  res.status(201).send({task: newTask})
})

// Server Listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
