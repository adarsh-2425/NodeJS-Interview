const express = require('express');
const app = express();

const port = process.env.port || 3000;

const dataValidation = require('./dataValidationMiddleware');
const isProductAvailable = require('./isProductAvailable');

const shoppingCart = [];

// Middleware to parse JSON data
app.use(express.json());

// POST Route
app.post('/api/cart/add', dataValidation, async (req, res) => {
  const { id, quantity } = req.body;

  const product = await isProductAvailable(id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return res.status(400).json({ error: 'Quantity must be a positive integer' });
  }

  const newItem = {
    item: product ? product.name : 'Product', // Handle case when product is not found
    quantity,
  };

  shoppingCart.push(newItem);

  return res.status(200).json({ message: `${newItem.item} added to shopping cart` });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
