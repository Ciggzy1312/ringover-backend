const express = require("express");
const { createProductHandler, getProductsHandler, getProductHandler, deleteProductHandler } = require("../controllers/product.controller");
const validate = require("../middleware/validateResource");
const protect = require("../middleware/requireUser");
const { createProductSchema } = require("../schema/product.schema");

const router = express.Router();

router.post("/api/product", protect, validate(createProductSchema), createProductHandler);

router.get("/api/product", protect, getProductsHandler);

router.get("/api/product/:id", protect, getProductHandler);

router.delete("/api/product/:id", protect, deleteProductHandler);

module.exports = router;