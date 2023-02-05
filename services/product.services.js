const { Op } = require('sequelize');
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

const getProductByFilters = async (input) => {

    const min = input.min ? parseInt(input.min) : 0;
    const max = parseInt(input.max);

    const whereStatement = { price: { [Op.gte]: min }};

    if(input.type) {
        whereStatement.type = input.type;
    }
    if(input.max) {
        whereStatement.price = { [Op.gte]: min, [Op.lte]: max };
    }

    try {
        const products = await Product.findAll({ where: whereStatement });
        return products;
    } catch (error) {
        return res.status(400).json({ message: "Could not get products" });
    }
}

const deleteProduct = async (input) => {
    
    try {
        const product = await Product.destroy({ where: { id: input.id } });
        return product;
    } catch (error) {
        return res.status(400).json({ message: "Could not delete product" });
    }
}

module.exports = { createProduct, getProducts, getProduct, getProductByFilters, deleteProduct }