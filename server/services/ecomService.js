const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { sortProducts, paginateProducts } = require('../utils/helpers');

const ECOMMERCE_APIS = [
  'https://ecommerce1.com/api/AMZ',
  'https://ecommerce2.com/api/FLP',
  'https://ecommerce3.com/api/SNP',
  'https://ecommerce4.com/api/MYN',
  'https://ecommerce5.com/api/AZO'
];

const fetchProductsFromAllAPIs = async (category) => {
  const promises = ECOMMERCE_APIS.map(api => 
    axios.get(`${api}/categories/${category}/products`).then(response => response.data)
  );
  const results = await Promise.all(promises);
  return results.flat();
};

const getProducts = async (category, n, page, sort, order) => {
  const products = await fetchProductsFromAllAPIs(category);
  products.forEach(product => product.id = uuidv4());
  const sortedProducts = sortProducts(products, sort, order);
  return paginateProducts(sortedProducts, n, page);
};

const getProductById = async (category, productId) => {
  const products = await fetchProductsFromAllAPIs(category);
  return products.find(product => product.id === productId);
};

module.exports = {
  getProducts,
  getProductById
};
