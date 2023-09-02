import { authenticateUser } from './auth.mjs';
import { products } from './products.mjs'

// Simulate Authentication
const user = authenticateUser('user', 'password');

if (user) {
  console.log(`Welcome, ${user.username}, role: ${user.role}`);
  console.log('Products Dashbord\n');
  
  products.forEach(product => {
    console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Description: ${product.description}`)
  })
} else {
  console.log('Authntication Error. Please check your credentials')
}

