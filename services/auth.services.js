const jwt = require('jsonwebtoken');
const db = require('../models');

const User = db.users;

const registerUser = async (input) => {

    try {
        const user = await User.create(input);
        return user;
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

const loginUser = async (input) => {

    try {
        const user = await User.findOne({ where: { email: input.email } });

        if (user) {
            const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.SECRET, { expiresIn: '30d' })
            return token;
        }

        return null
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = { registerUser, loginUser }