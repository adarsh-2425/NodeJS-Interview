const express = require('express');
const app = express();

const port = process.env.port || 3000;

// parse json
app.use(express.json());

// data structure to store todo
const tasks = [];
let taskId = 1;

// Create a new task with a title and description.
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).send({error: 'Title cannot be empty'})
  }

  if (!description) {
    return res.status(400).send({error: 'Description cannot be empty'})
  }
  
  const newTask = { id: taskId, title, description };

  tasks.push(newTask);

  taskId++;

  res.status(201).send({message: 'New Task created'})
});

// Retrieve a list of all tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks)
})

// Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Find the task with the given ID
  const task = tasks.find(task => task.id === id);

  // If the task is not found, return a 404 error
  if (!task) {
    return res.status(400).json({error: 'Task not found. check your id'})
  }

  // If the task is found, return it as JSON
  res.status(200).json({ task });
  
})

// Update a task by ID
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res,status(404).json({ error: 'Task not found' })
  }

  const { title, description } = req.body;

  if (title) {
    task.title = title;
  }

  if (description) {
    task.description = description;
  }

  res.status(200).json({ message: 'Task updated' })
  
})

// Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;

  // Find the task with the given ID
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  // Remove the task from the tasks array using splice
  tasks.splice(taskIndex, 1);

  res.status(200).json({ message: 'task deleted' })
})

// server
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
