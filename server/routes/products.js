const express = require('express');
const { getProducts, getProductById } = require('../services/ecomService');
const router = express.Router();

router.get('/:category/products', async (req, res) => {
  try {
    const { category } = req.params;
    const { n = 10, page = 1, sort = 'rating', order = 'desc' } = req.query;
    const products = await getProducts(category, Number(n), Number(page), sort, order);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:category/products/:productId', async (req, res) => {
  try {
    const { category, productId } = req.params;
    const product = await getProductById(category, productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
