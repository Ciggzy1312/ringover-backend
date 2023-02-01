const { registerUser, loginUser } = require('../services/auth.services');

const registerUserHandler = async (req, res) => {

    try {
        const user = await registerUser(req.body);
        return res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        logger.error(error);
    }
}

const loginUserHandler = async (req, res) => {
    try {
        const token = await loginUser(req.body);

        if (!token) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' });
        return res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        logger.error(error);
    }
}

const logoutUserHandler = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "Logged out" })
}

module.exports = { registerUserHandler, loginUserHandler, logoutUserHandler }