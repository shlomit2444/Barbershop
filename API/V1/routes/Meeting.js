
const express = require('express')
const router = express.Router()
const meetingController = require('../controllers/meeting');

// Retrieve all meetin
router.get('/', meetingController.findAll);

// Create a new meetin
router.post('/', meetingController.create);

// Retrieve a single meetin with id
router.get('/:id', meetingController.findById);

// Update a meetin with id
router.put('/:id', meetingController.update);

// Delete a meetin with id
router.delete('/:id', meetingController.delete);

module.exports = router;