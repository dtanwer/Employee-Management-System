const express = require('express');
const userRequestRouter = require('./routes/userRequest');
const userRouter = require('./routes/user');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Api is working");
});

app.use('/user',userRouter)

module.exports = app;