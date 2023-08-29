// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
require('./db/connect');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(bodyParser.json());


// app.use('/message', apiRoutes);

// Socket.io connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle joining and leaving chat rooms
  socket.on('join', (roomId) => {
    socket.join(roomId);
  });

  socket.on('leave', (roomId) => {
    socket.leave(roomId);
  });

  // Handle incoming messages
  socket.on('sendMessage', (data) => {
    io.to(data.roomId).emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


app.use('/auth',authRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
