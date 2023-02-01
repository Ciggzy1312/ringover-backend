const express = require('express');
const authRouter = require('./auth.router');

const router = express.Router();


router.use(authRouter);

module.exports = router;