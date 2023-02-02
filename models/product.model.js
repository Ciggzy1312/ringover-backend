module.exports = (sequelize, Sequelize) => {

    const Product = sequelize.define('product', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return Product;
};