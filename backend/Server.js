const express = require("express");
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require("mongoose");
const cors = require("cors")


const app = express();
const server = http.createServer(app); // Create an HTTP server using the Express app
const io = socketIO(server); // Create a WebSocket server using the HTTP server

app.use(cors)
//By creating an HTTP server and using socket.io, you can handle both regular HTTP requests (for API endpoints) and WebSocket connections (for real-time chat functionality) in your server.js file. This allows your backend to serve both the API endpoints and handle real-time messaging concurrently within the same application.
// key -> VyaSXfFBOX3Mb8Aj

const PORT = process.env.PORT || 5000;

const MONGODB_URI = 'mongodb+srv://arsaluddin134:VyaSXfFBOX3Mb8Aj@cluster0.mcc8iiu.mongodb.net/'; // Replace with your MongoDB connection URI

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MessageSchema = new mongoose.Schema({
  text: String,
  user: String,
});

const Message = new mongoose.model('Message',MessageSchema);

// Socket.io connection handling
io.on('connection', async(socket) => {
  console.log('User connected:', socket.id);


   // Fetch initial chat data from the database
   try {
    const messages = await Message.find().sort({ _id: -1 }).limit(10);
    socket.emit('initial_data', messages);
  } catch (error) {
    console.error('Error fetching initial data:', error);
    socket.emit('initial_data', []); // Send an empty array if an error occurs
  }


  // Event when a new message is sent
  socket.on('send_message', (data) => {
    console.log('Message received:', data);

    // Save the message to the MongoDB database
    const message = new Message({
      text: data.text,
      user: data.user,
    });

    message.save((err) => {
      if (err) {
        console.error('Error saving message:', err);
      } else {
        // Broadcast the new message to all connected clients
        io.emit('receive_message', data);
      }
    });
  });

  // Event when a user disconnects
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});