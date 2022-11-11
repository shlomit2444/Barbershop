const express = require('express')
const router = express.Router()
const utilityController = require('../controllers/utility');

// Retrieve all utility
router.get('/', utilityController.findAll);

// Create a new utility
router.post('/', utilityController.create);

// Retrieve a single utility with id
router.get('/:id', utilityController.findById);

// Update a utility with id
router.put('/:id', utilityController.update);

// Delete a utility with id
router.delete('/:id', utilityController.delete);

module.exports = router