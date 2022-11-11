const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shop');

// Retrieve all shop
router.get('/', shopController.findAll);

// Create a new shop
router.post('/', shopController.create);

// Retrieve a single shop with id
router.get('/:id', shopController.findById);

// Update a shop with id
router.put('/:id', shopController.update);

// Delete a shop with id
router.delete('/:id', shopController.delete);

module.exports = router