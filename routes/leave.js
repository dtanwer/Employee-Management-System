const express = require('express');
const { getLeave, getLeaves, createLeave, updateLeave, deleteLeave,getLeavesForTechLead } = require('../controllers/leave.js');
const router = express.Router();

router.get('/', getLeaves).post('/', createLeave)
router.get('/techlead/:id', getLeavesForTechLead)
router.get(':/id', getLeave).put('/:id', updateLeave).delete('/:id', deleteLeave)

module.exports = router;