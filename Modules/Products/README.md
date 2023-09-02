# Ecommerce Simplified
### Question: You are working on a Node.js project that simulates a simple e-commerce system. You need to create and use modules to organize your code effectively. Specifically, you need to create two modules: one for handling user authentication and another for managing product listings.

Create a module named auth.js that exports a function called authenticateUser(username, password). This function should simulate user authentication by
checking if the provided username and password match predefined values. If the credentials are valid, it should return a user object with a username and role. 
If not, it should return null.

Create a module named products.js that exports an array of product objects. Each product object should have properties like id, name, price, and description.

In a third file named app.js, import the auth.js and products.js modules. Use the authenticateUser function to simulate user authentication. If authentication 
is successful, display a list of available products from the products.js module. If authentication fails, display an error message.
