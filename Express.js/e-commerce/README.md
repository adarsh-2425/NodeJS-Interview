## Question:

You are building a basic e-commerce website using Express.js to manage products in a shopping cart. Implement a route that allows users to add products to their shopping cart. Each product has an id, name, price, and quantity.

Your task is to create an Express.js route that handles adding  products to the shopping cart. Specifically, you need to:

- Create a route for adding a product to the shopping cart. It should accept a POST request to /api/cart/add with the product details (product id and quantity) in the request body. Ensure that the product exists in your database before adding it to the cart.
  
- Implement validation to ensure that the product id is a positive integer and the quantity is a positive integer as well.

- Use an array or data structure to represent the shopping cart.

- Return appropriate JSON responses to indicate the success or failure of the operations.
