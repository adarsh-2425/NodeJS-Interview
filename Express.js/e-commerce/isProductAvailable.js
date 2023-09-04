const fs = require('fs').promises;

async function isProductAvailable(id) {
  try {
    const data = await fs.readFile('products.json', 'utf-8');
    const products = JSON.parse(data);

    const product = products.find((obj) => obj.id === id);

    return product || null; // Return null if product is not found
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

module.exports = isProductAvailable;
