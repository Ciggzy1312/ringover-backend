const express = require("express");
const { registerUserHandler, loginUserHandler } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/api/user/register", registerUserHandler);

router.post("/api/user/login", loginUserHandler);

module.exports = router;