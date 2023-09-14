const express = require('express');
const { getAnnouncement, getAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement } = require('../controllers/announcement.js');
const router = express.Router();

router.get('/', getAnnouncements).post('/', createAnnouncement)
router.get('/:id',getAnnouncement).put('/:id', updateAnnouncement).delete('/:id', deleteAnnouncement)

