const express = require('express');
const router = express.Router();
const deleteProductSecondaryFunctionController = require('../../controller/product_controller_create_files/deleteProductSecondaryFunctionController');

// Route to delete product secondary function
router.delete('/:id', deleteProductSecondaryFunctionController);

module.exports = router;
