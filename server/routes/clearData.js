const express = require('express');
const ClearData = require('../models/ClearData');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const clearData = new ClearData(req.body);
    await clearData.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
