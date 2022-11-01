const express = require('express')
const router = express.Router()
const meetingController = require('../controllers/meeting');

// Retrieve all employees
router.get('/', meetingController.findAll);

// Create a new employee
router.post('/', meetingController.create);

// Retrieve a single employee with id
router.get('/:id', meetingController.findById);

// Update a employee with id
router.put('/:id', meetingController.update);

// Delete a employee with id
router.delete('/:id', meetingController.delete);

module.exports = router;