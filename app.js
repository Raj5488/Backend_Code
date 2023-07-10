const express = require("express");
const app = express();
const authRouter = require('./router/authRaouter.js');
const databaseConnection = require("./config/databaseConnection.js");

databaseConnection();

app.use(express.json());

app.use('/api/auth', authRouter)
module.exports = app;