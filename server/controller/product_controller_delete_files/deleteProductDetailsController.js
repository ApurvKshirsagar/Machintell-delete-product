const deleteProductDetailsModel = require('../../model/product-model/deleteProductDetailsModel');

const deleteProductDetailsController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteProductDetailsModel(id);
        if (result) {
            res.status(200).json({ message: 'Product Details Deleted Successfully' });
        } else {
            res.status(404).json({ message: 'Product Details not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = deleteProductDetailsController;
