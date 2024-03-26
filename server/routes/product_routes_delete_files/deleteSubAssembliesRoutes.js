const express = require('express');
const router = express.Router();
const deleteSubAssembliesController = require('../../controller/product_controller_create_files/deleteSubAssembliesController');

// Route to delete sub-assemblies
router.delete('/:id', deleteSubAssembliesController);

module.exports = router;
