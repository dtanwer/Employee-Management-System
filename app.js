const express = require('express');
const userRequestRouter = require('./routes/userRequest');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Api is working");
});

app.use('/user-request',userRequestRouter)

module.exports = app;