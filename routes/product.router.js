const express = require("express");
const { createProductHandler, getProductsHandler, getProductHandler } = require("../controllers/product.controller");
const validate = require("../middleware/validateResource");
const { createProductSchema } = require("../schema/product.schema");

const router = express.Router();

router.post("/api/product", validate(createProductSchema), createProductHandler);

router.get("/api/product", getProductsHandler);

router.get("/api/product/:id", getProductHandler);

module.exports = router;