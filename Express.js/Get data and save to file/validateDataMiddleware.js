// Middleware for validating request body
function validateData(req, res, next) {

  // Check if 'title' property exists in req.body
if (!req.body.hasOwnProperty('title')) {
  return res.status(400).send({ error: 'Title is missing' });
}

// Check if 'description' property exists in req.body
if (!req.body.hasOwnProperty('description')) {
  return res.status(400).send({ error: 'Description is missing' });
}

// Check if 'completed' property exists in req.body
if (!req.body.hasOwnProperty('completed')) {
  return res.status(400).send({ error: 'Completed is missing' });
}

  
  const { title, description, completed } = req.body;
  
  if (!title || !description || typeof completed !== 'boolean') {
    return res.status(400).send({error: 'Please provide valid title, description and completed'})
  }

  next();
}

module.exports = validateData;
