const db = require('../models');

const Product = db.products;

const createProduct = async (input) => {

    try {
        const product = await Product.create(input);
        return product;
    } catch (error) {
        return res.status(400).json({ message: "Could not create product" });
    }
}

const getProducts = async () => {

    try {
        const products = await Product.findAll({});
        return products;
    } catch (error) {
        return res.status(400).json({ message: "Could not get products"});
    }
}

const getProduct = async (input) => {
    
        try {
            const product = await Product.findOne({ where: { id: input.id } });
    
            return product;
        } catch (error) {
            return res.status(400).json({ message: "Could not get product" });
        }
}

module.exports = { createProduct, getProducts, getProduct }