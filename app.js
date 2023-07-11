const express = require("express");
const app = express();
const authRouter = require('./router/authRaouter.js');
const databaseConnection = require("./config/databaseConnection.js");
const cookieParser = require('cookie-parser');

databaseConnection();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);
module.exports = app;