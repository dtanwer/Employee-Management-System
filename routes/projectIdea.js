const express = require('express');
const { updateProjectIdea, deleteProjectIdea, createProjectIdea, getProjectIdea, getProjectIdeas }=require('../controllers/projectIdea.js');
const router = express.Router();

router.get('/', getProjectIdeas).post('/', createProjectIdea);
router.get('/:id', getProjectIdea).put('/:id', updateProjectIdea).delete('/:id', deleteProjectIdea);

module.exports = router;