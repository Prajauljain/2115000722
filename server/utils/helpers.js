const sortProducts = (products, sortBy, order) => {
    return products.sort((a, b) => {
      if (order === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
  };
  
  const paginateProducts = (products, n, page) => {
    const startIndex = (page - 1) * n;
    return products.slice(startIndex, startIndex + n);
  };
  
  module.exports = {
    sortProducts,
    paginateProducts
  };
  