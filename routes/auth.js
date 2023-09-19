const express = require('express');
const {loginUser} =require('../controllers/auth');
const { checkEmailFormat } = require('../middlewares/checkEmailformat');
const router = express.Router();

router.post('/login',checkEmailFormat,loginUser);

module.exports = router;