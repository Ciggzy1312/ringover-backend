const express = require("express");
const { registerUserHandler, loginUserHandler, logoutUserHandler } = require("../controllers/auth.controller");
const validate = require("../middleware/validateResource");
const { registerUserSchema, loginUserSchema } = require("../schema/user.schema");

const router = express.Router();

router.post("/api/user/register", validate(registerUserSchema), registerUserHandler);

router.post("/api/user/login", validate(loginUserSchema), loginUserHandler);

router.get("/api/user/logout", logoutUserHandler);

module.exports = router;