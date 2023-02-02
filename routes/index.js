const express = require('express');
const authRouter = require('./auth.router');
const productRouter = require('./product.router');

const router = express.Router();


router.use(authRouter);

router.use(productRouter);

module.exports = router;