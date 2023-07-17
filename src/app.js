const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  //Write a code here for endpoint /product/:productId and also print parameter in json form
  const productId = req.params.productId;

  // Return the productId in JSON format
  res.status(200).json({
    productId: productId,
  });
});

module.exports = app;
