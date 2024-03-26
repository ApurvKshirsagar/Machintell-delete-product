const deleteSecFunctionsModel = require('../../model/product-model/deleteSecFunctionsModel');

const deleteSecFunctionsController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteSecFunctionsModel(id);
        if (result) {
            res.status(200).json({ message: 'Sub-Sec Functions Deleted Successfully' });
        } else {
            res.status(404).json({ message: 'Sub-Sec Functions not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = deleteSecFunctionsController;
