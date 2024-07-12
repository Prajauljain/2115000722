const mongoose = require('mongoose');

const clearDataSchema = new mongoose.Schema({
  category: String,
  company: String,
  rating: Number,
  minPrice: Number,
  maxPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ClearData', clearDataSchema);

