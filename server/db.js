const fs = require('fs');
const path = require('path');

const getProducts = () => {
  const dataPath = path.join(__dirname, 'data', 'products.json');
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

module.exports = { getProducts };
