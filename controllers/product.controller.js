const { createProduct, getProduct, getProducts, deleteProduct, getProductByFilters } = require('../services/product.services');

const createProductHandler = async (req, res) => {

    try {
        const product = await createProduct(req.body);
        return res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

const getProductsHandler = async (req, res) => {

    const { min, max, type } = req.query;
    console.log(min, max, type);

    try {
        if(min || max || type) {
            const product = await getProductByFilters({min, max, type});
            return res.status(201).json({ message: "Product found successfully", product });
        }
        const product = await getProducts();
        return res.status(201).json({ message: "Product found successfully", product });
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

        return res.status(201).json({ message: "Product found successfully", product });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

const deleteProductHandler = async (req, res) => {
    
        const { id } = req.params;
    
        try {
            const product = await deleteProduct({id});
    
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
    
            return res.status(201).json({ message: "Product deleted successfully", product });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
}

module.exports = { createProductHandler, getProductsHandler, getProductHandler, deleteProductHandler }