const express = require("express");
const http = require('http');
const socketIO = require('socket.io');
const { MongoClient } = require('mongodb');

const app = express();
const server = http.createServer(app); // Create an HTTP server using the Express app
const io = socketIO(server); // Create a WebSocket server using the HTTP server

//By creating an HTTP server and using socket.io, you can handle both regular HTTP requests (for API endpoints) and WebSocket connections (for real-time chat functionality) in your server.js file. This allows your backend to serve both the API endpoints and handle real-time messaging concurrently within the same application.
// key -> VyaSXfFBOX3Mb8Aj

const PORT = process.env.PORT || 5000;

const MONGODB_URI = 'mongodb+srv://arsaluddin134:VyaSXfFBOX3Mb8Aj@cluster0.mcc8iiu.mongodb.net/'; // Replace with your MongoDB connection URI


server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});