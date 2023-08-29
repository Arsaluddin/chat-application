// backend/config/db.js
const mongoose = require('mongoose');
// 
// MONGODB_URI = mongodb+srv://arsaluddin134:VyaSXfFBOX3Mb8Aj@cluster0.mcc8iiu.mongodb.net
// PORT = 5000

// Replace this URL with your MongoDB Atlas connection string

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});
