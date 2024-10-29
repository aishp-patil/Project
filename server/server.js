const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getProducts } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to get products
app.get('/api/products', (req, res) => {
  const products = getProducts();
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
