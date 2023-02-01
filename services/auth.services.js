const jwt = require('jsonwebtoken');

const registerUser = async (input) => {

    try {
        const user = { name: input.name, email: input.email};
        return user;
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const loginUser = async (input) => {

    try {
        const user = { name: input.name, email: input.email };

        if (user) {
            const token = jwt.sign({ name: user.name, email: user.email }, process.env.SECRET, { expiresIn: '30d' })
            return token;
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = { registerUser, loginUser }