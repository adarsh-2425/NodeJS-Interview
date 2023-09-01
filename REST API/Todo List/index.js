const express = require('express');
const app = express();

const port = process.env.port || 3000;

// Middleware for parsing json
app.use(express.json());

// Tasks
let tasks = [];
let nextTaskId = 1;

// New Task
app.post('/api/tasks', (req, res) => {
  const task = {
    id: nextTaskId++,
    title: req.body.title,
    description: req.body.description,
    completed: false
  };

  tasks.push(task);
  res.status(201).json(task);
});

// Retreive a list of all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Retrieve single task by ID
app.get('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    res.json(task)
  } else {
    res.status(404).json({message: 'Task Not Found!'})
  }
});

// Update task by id
app.put('/api/tasks/:id', (req, res) => {
  // Check if task exists
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed || task.completed;
    res.json(task);
  } else {
    res.status(404).json({message: 'Task Not Found!'})
  }
})

// Delete task by id
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.json({message: 'Task Deleted'}) 
})

// Server
app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
