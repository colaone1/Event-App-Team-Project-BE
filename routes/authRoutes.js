const express = require('express');
const { login } = require('../controllers/eventAuthController');
const router = express.Router();

router.post('/login', login);

module.exports = router;