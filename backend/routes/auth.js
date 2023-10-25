const express = require('express');
const { register, login, getRegisteredUsernames} = require('../controllers/auth'); // Update the path accordingly

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getRegisteredUsernames);

module.exports = router;
