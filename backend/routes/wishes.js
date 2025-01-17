const express = require('express');
const router = express.Router();
const Wish = require('../models/Wish');

// Fetch all wishes
router.get('/', async (req, res) => {
  try {
    const wishes = await Wish.findAll();
    res.json(wishes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch wishes' });
  }
});

// Add a new wish
router.post('/', async (req, res) => {
  const { name, message } = req.body;
  try {
    const newWish = await Wish.create({ name, message });
    res.status(201).json(newWish);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add wish' });
  }
});

module.exports = router;
