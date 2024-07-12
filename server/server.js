const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors package

const clearDataRoute = require('./routes/clearData');

const app = express();

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

mongoose.connect('mongodb://localhost:27017/top-products', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/clear', clearDataRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
