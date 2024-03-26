const deleteProductSecondaryFunctionModel = require('../../model/product-model/deleteProductSecondaryFunctionModel');

const deleteProductSecondaryFunctionController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteProductSecondaryFunctionModel(id);
        if (result) {
            res.status(200).json({ message: 'Product Secondary Function Deleted Successfully' });
        } else {
            res.status(404).json({ message: 'Product Secondary Function not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = deleteProductSecondaryFunctionController;
