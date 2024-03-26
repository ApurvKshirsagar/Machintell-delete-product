const express = require('express');
const router = express.Router();
const deleteProductDetailsController = require('../../controller/product_controller_create_files/deleteProductDetailsController');

// Route to delete product details
router.delete('/:id', deleteProductDetailsController);

module.exports = router;
