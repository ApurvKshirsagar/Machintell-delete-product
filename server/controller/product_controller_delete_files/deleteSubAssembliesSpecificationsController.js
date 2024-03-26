const deleteSubAssembliesSpecificationsModel = require('../../model/product-model/deleteSubAssembliesSpecificationsModel');

const deleteSubAssembliesSpecificationsController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteSubAssembliesSpecificationsModel(id);
        if (result) {
            res.status(200).json({ message: 'Sub-Assemblies Specifications Deleted Successfully' });
        } else {
            res.status(404).json({ message: 'Sub-Assemblies Specifications not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = deleteSubAssembliesSpecificationsController;
