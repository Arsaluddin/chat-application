// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const apiRoutes = require('./routes/message');
const dotenv = require('dotenv')
dotenv.config();
require('./db/connect');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.use('/message', apiRoutes);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
