const express = require('express');
const router = express.Router();
const deleteProductController = require('../../controller/product_controller_create_files/deleteProductController');

// Route to delete a product
router.delete('/:id', deleteProductController);

module.exports = router;
