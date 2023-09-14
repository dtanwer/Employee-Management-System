const express =require('express');
const { getUserRequest,updateUserRequest,deleteUserRequest,createUserRequest } = require('../controllers/userRequest');
const router=express.Router();

router.get('/',getUserRequest).post('/',createUserRequest)
router.put('/:id',updateUserRequest).delete('/:id',deleteUserRequest)

module.exports=router;