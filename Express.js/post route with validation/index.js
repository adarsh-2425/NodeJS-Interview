const express = require('express');
const app = express();

const port = process.env.port || 3000;

const posts = []; // Array to store posts
let newId = 1; // Initializing id with 1

// Middleware for validation
function dataValidation(req, res, next) {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Please provide title, content, and author' });
  }
  next();
}

// Middleware to parse json body
app.use(express.json());

// POST
app.post('/api/blog/posts', dataValidation, (req, res) => {
  try {
    const { title, content, author } = req.body;

    const newPost = {
      id: newId,
      title,
      content,
      author
    }

    posts.push(newPost); // Add post to array
    newId++; // Increment id by 1 for every new post
    return res.status(201).json({data: newPost})
  } catch (err) {
    res.status(400).json({error: err.message})
  }
})

// Server listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
