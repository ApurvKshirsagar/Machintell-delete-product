const deleteProductSpecificationsModel = require('../../model/product-model/deleteProductSpecificationsModel');

const deleteProductSpecificationsController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteProductSpecificationsModel(id);
        if (result) {
            res.status(200).json({ message: 'Product Specifications Deleted Successfully' });
        } else {
            res.status(404).json({ message: 'Product Specifications not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = deleteProductSpecificationsController;
