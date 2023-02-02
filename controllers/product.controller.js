const { createProduct, getProduct, getProducts } = require('../services/product.services');

const createProductHandler = async (req, res) => {

    try {
        const product = await createProduct(req.body);
        return res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

const getProductsHandler = async (req, res) => {

    try {
        const producta = await getProducts();
        return res.status(201).json({ message: "Product created successfully", producta });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

const getProductHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const product = await getProduct({id});

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

module.exports = { createProductHandler, getProductsHandler, getProductHandler }