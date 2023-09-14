const express = require('express');
const {loginUser} =require('../controllers/auth');
const router = express.Router();

router.post('/login',verifyToken,loginUser);

module.exports = router;