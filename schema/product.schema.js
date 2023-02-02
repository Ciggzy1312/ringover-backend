const Joi = require('joi');

const createProductSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(50),
    price: Joi.number().min(1).required(),
    image: Joi.string().optional(),
    rating: Joi.number().min(1).max(5).optional(),
    type: Joi.string().valid('loafers', 'sneakers').required(),
});

module.exports = { createProductSchema };