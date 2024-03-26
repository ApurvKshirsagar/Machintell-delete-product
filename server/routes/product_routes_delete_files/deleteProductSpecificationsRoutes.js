const express = require('express');
const router = express.Router();
const deleteProductSpecificationsController = require('../../controller/product_controller_create_files/deleteProductSpecificationsController');

// Route to delete product specifications
router.delete('/:id', deleteProductSpecificationsController);

module.exports = router;
