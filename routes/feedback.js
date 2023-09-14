const express = require('express');
const { getFeedback, getFeedbacks, createFeedback, updateFeedback, deleteFeedback } = require('../controllers/feedback.js');
const router = express.Router();

router.get('/', getFeedbacks).post('/', createFeedback)
router.get(':/id', getFeedback).put('/:id', updateFeedback).delete('/:id', deleteFeedback)
