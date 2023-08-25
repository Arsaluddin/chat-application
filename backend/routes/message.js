// backend/routes/api.js
const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// Create a new message
router.post('/messages', async (req, res) => {
  try {
    const { sender, content } = req.body;
    const newMessage = new Message({ sender, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the message.' });
  }
});

// Get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 'asc' });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching messages.' });
  }
});

module.exports = router;
