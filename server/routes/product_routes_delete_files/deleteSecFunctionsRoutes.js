const express = require('express');
const router = express.Router();
const deleteSecFunctionsController = require('../../controller/product_controller_create_files/deleteSecFunctionsController');

// Route to delete sub-sec functions
router.delete('/:id', deleteSecFunctionsController);

module.exports = router;
