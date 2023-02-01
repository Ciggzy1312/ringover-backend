const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

app.use(router)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API' });
});

app.listen(5000, () => {
    console.log('Server listening on port 5000!');
});