const express = require('express');
const router = express.Router();
const deleteSubAssembliesSpecificationsController = require('../../controller/product_controller_create_files/deleteSubAssembliesSpecificationsController');

// Route to delete sub-assemblies specifications
router.delete('/:id', deleteSubAssembliesSpecificationsController);

module.exports = router;
