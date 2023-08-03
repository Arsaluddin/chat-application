const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: String,
  user: String,
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;