const express = require('express');
const app = express();
const userService = require('./userService');

const port = process.env.PORT || 3000;

app.use(express.json());

// Create a new user
app.post('/users', async (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).send({ error: 'Please fill both username and email' });
  }

  try {
    const message = await userService.addUser(username, email);
    res.status(201).send({message})
  } catch (error) {
      res.status(400).send({error});
  }
});

// Retrieve all users
app.get('/users', async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).send(users)
  } catch(error) {
    res.status(400).send({error})
  }
});

// Retrieve a specific user by username
app.get('/users/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const user = await userService.getUser(username);
    res.status(200).send({ user })
    
  } catch (error) {
    res.status(404).send({ error })
  }
});

// Update a user by username
app.put('/users/:username', async (req, res) => {
  const name = req.params.username;

  const { username, email } = req.body;

  try {
    const user = await userService.updateUser(name, username, email)
    res.status(200).send({ user })
  } catch (error) {
    res.status(404).send({ error })
  }
});

// Delete a user by username
app.delete('/users/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const result = userService.deleteUser(username);
    res.status(200).send({ result })
  } catch (error) {
    res.status(404).send({ error })
  }
});

// server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
