const express = require('express');
const { getIssue, getIssues, createIssue, updateIssue, deleteIssue } = require('../controllers/issue.js');
const router = express.Router();

router.get('/', getIssues).post('/', createIssue)
router.get('/:id', getIssue).put('/:id', updateIssue).delete('/:id', deleteIssue)

