const deleteSubAssembliesModel = require('../../model/product-model/deleteSubAssembliesModel');

const deleteSubAssembliesController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteSubAssembliesModel(id);
        if (result) {
            res.status(200).json({ message: 'Sub-Assemblies Deleted Successfully' });
        } else {
            res.status(404).json({ message: 'Sub-Assemblies not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = deleteSubAssembliesController;
