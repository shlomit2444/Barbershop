const express = require('express')
const router = express.Router()
const utilityController = require('../controllers/utility');

// Retrieve all employees
router.get('/', utilityController.findAll);

// Create a new employee
router.post('/', utilityController.create);

// Retrieve a single employee with id
router.get('/:id', utilityController.findById);

// Update a employee with id
router.put('/:id', utilityController.update);

// Delete a employee with id
router.delete('/:id', utilityController.delete);

module.exports = router