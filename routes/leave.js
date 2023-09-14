const express = require('express');
const { getLeave, getLeaves, createLeave, updateLeave, deleteLeave } = require('../controllers/leave.js');
const router = express.Router();

router.get('/', getLeaves).post('/', createLeave)
router.get(':/id', getLeave).put('/:id', updateLeave).delete('/:id', deleteLeave)

module.exports = router;